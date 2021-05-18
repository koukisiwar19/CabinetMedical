import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TimestampEntites} from "../../Generics/timestamp.entities";
import {UserRoleEnum} from "../../enums/user-role.enum";

@Entity('user')
export class UserEntity extends TimestampEntites {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
        unique: true
    })
    username: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column({
        type: "enum",
        enum: UserRoleEnum,
        default: UserRoleEnum.MEDECIN
    })
    role: string;
}
