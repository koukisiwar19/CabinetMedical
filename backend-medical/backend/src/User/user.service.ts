import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {UserSubscribeDto} from "./DTO/UserSubscribe.dto";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import {UserLoginDTO} from "./DTO/UserLogin.dto";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {
    }
    
    async subscribe(userData: UserSubscribeDto): Promise<Partial<UserEntity>>{
        const user= this.userRepository.create({
            ...userData
        });
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            await this.userRepository.save(user);
        } catch (e){
            throw new ConflictException(`Le username et le email doivent être uniques`)
        }

        return {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password
        };
    }
    /*async getUserByUsername(username: string): Promise<UserEntity[]>{
        const temp= await this.userRepository.find(
            {
                username: username
            }
        )

        if (!temp){
            throw await new NotFoundException(`Username n'existe pas`);
        }
        else
            return  temp;
    }
    async login (userData: UserLoginDTO){
        const user= await this.getUserByUsername(userData.username)
        console.log("userData : ", userData)
        const hashedPassword= bcrypt.hash(userData.password)



    return userData;

    }*/
    async login(credentials: UserLoginDTO)  {

        // Récupére le login et le mot de passe
        const {username, password} = credentials;
        // On peut se logger ou via le username ou le password
        // Vérifier est ce qu'il y a un user avec ce login ou ce mdp
        const user = await this.userRepository.createQueryBuilder("user")
            .where("user.username = :username or user.email = :username",
                {username}
            )
            .getOne();
        // console.log(user);
        // Si not user je déclenche une erreur

        if (!user)
            throw new NotFoundException('username ou password erronée');
        // Si oui je vérifie est ce que le mot est correct ou pas
        const hashedPassword = await bcrypt.hash(password, user.salt);
        if (hashedPassword === user.password) {
            console.log({
                username,
                email: user.email,
                role: user.role
            })
            return {
                username,
                email: user.email,
                role: user.role
            };
        } else {
            // Si mot de passe incorrect je déclenche une erreur
            throw new NotFoundException('username ou password erronée');
        }
    }

}
