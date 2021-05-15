import {ConflictException, Injectable} from '@nestjs/common';
import {UserSubscribeDto} from "./DTO/UserSubscribe.dto";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {
    }
    
    async subscribe(userData: UserSubscribeDto): Promise<UserEntity>{
        const user= this.userRepository.create({
            ...userData
        });
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            this.userRepository.save(user);
        } catch (e){
            throw new ConflictException(`Le username et le password doivent être uniques`)
        }
        return user;
    }

}
