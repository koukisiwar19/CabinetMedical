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

export class AddPatientDto {
    @IsString()
    @IsNotEmpty({
        message: `Le nom ne doit pas être vide`
    })
    nom: string;
    @IsString()
    @IsNotEmpty({
        message: `Le prenom ne doit pas être vide`
    })
    prenom: string;
    @Type(() => Date)
    @IsDate({
        message: `La date est incorrecte`
    })
    @IsNotEmpty({
        message: `La date ne doit pas être vide`
    })
    date_naissance: string;

    @IsPhoneNumber('TN',{
        message: `Le numéro de téléphone est invalide`
    })

    @IsNotEmpty(
        {
            message: `Le numéro de téléphone ne doit pas être vide`
        }
    )
    num_tel: string;
    @IsOptional()
    adresse: string;
}
