import {
    IS_BTC_ADDRESS,
    IsBtcAddress,
    IsDate,
    IsDateString,
    IsNotEmpty, IsOptional,
    IsPhoneNumber,
    IsString,
    Length
} from 'class-validator';
import {Type} from "class-transformer";

export class updatePatientDto {
    @IsString()
    @IsOptional()
    @IsNotEmpty({
        message: `Le nom ne doit pas être vide`
    })
    nom: string;
    @IsString()
    @IsOptional()
    @IsNotEmpty({
        message: `Le prenom ne doit pas être vide`
    })
    prenom: string;
    @IsOptional()
    @Type(() => Date)
    @IsDate({
        message: `La date est incorrecte`
    })
    @IsNotEmpty({
        message: `La date ne doit pas être vide`
    })
    date_naissance: string;
    @IsOptional()
    @IsPhoneNumber('TN',{
        message: `Le numéro de téléphone est invalide`
    })
    @IsOptional()
    @IsNotEmpty(
        {
            message: `Le numéro de téléphone ne doit pas être vide`
        }
    )
    num_tel: string;
    @IsOptional()
    adresse: string;
    @IsNotEmpty({
        message: `L'image ne doit pas être vide`
    })
    @IsOptional()
    path:string;
}
