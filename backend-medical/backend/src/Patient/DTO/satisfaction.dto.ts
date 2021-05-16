import {IsIn} from "class-validator";

export class SatisfactionDto {
    @IsIn([
        'Satisfait',
        'Non satisfait'
    ])
    satisfaction: string

}
