import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserSubscribeDto} from "./DTO/UserSubscribe.dto";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {
    }


    @Post()
    register(
        @Body() userData: UserSubscribeDto
    ) {
        return this.userService.subscribe(userData);
    }
}
