import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TimestampEntites} from "../../Generics/timestamp.entities";


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
    path: string
    @Column()
    sexe: string
}
