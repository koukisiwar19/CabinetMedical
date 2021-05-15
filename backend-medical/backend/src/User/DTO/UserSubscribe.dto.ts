import {IsEmail, IsNotEmpty} from "class-validator";

export class UserSubscribeDto {

    @IsNotEmpty()
    username: string

    @IsEmail()
    email:string

    @IsNotEmpty()
    password:string

}
