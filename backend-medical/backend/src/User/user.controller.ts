import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserSubscribeDto} from "./DTO/UserSubscribe.dto";
import {UserLoginDTO} from "./DTO/UserLogin.dto";
import {Patient} from "../Patient/entities/patient.entity";
import {UserEntity} from "./entities/user.entity";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {
    }


    @Post("register")
    async register(
        @Body() userData: UserSubscribeDto
    ) {
        return this.userService.subscribe(userData);
    }
    /*@Get()
    async getUserByUsername(
        @Body() userData: UserLoginDTO
    ):Promise<UserEntity[]>{

            return await this.userService.getUserByUsername(userData.username);

    }*/
    @Post("login")
    async login(
        @Body() userData: UserLoginDTO
    )
    {
        return  this.userService.login(userData);
    }

}
