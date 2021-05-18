import {IsNumber, IsOptional} from "class-validator";
import {Type} from "class-transformer";

 export class StatParamDto {

    @IsNumber()
    min: number;

    @IsNumber()
    max: number;
}
