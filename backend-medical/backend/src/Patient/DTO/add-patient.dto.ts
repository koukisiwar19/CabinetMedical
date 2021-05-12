import {IS_BTC_ADDRESS, IsBtcAddress, IsDate, IsPhoneNumber, IsString} from 'class-validator';

export class AddPatientDto {
    @IsString()
    nom: string;
    @IsString()
    prenom: string;
    @IsDate()
    date_naissance: string;
    @IsPhoneNumber()
    num_tel: string;
    @IsBtcAddress()
    adresse: string;
}
