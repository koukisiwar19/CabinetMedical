import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TimestampEntites} from "../../Generics/timestamp.entities";
import {sexeEnum} from "../../enums/sexe.enum";


@Entity()
export class Patient extends TimestampEntites{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nom: string;
    @Column()
    prenom: string;
    @Column()
    date_naissance: Date;
    @Column()
    num_tel: string;
    @Column()
    adresse: string;
    @Column()
    path: string;
    @Column({
        type: "enum",
        enum: sexeEnum,
        default: sexeEnum.femme
    })
    sexe: string
    @Column()
    assurance: boolean;
}
