import {TimestampEntites} from "../../Generics/timestamp.entities";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('antecedent')
export class Antecedent extends TimestampEntites
{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nom: string;
    @Column()
    description: string;

}
