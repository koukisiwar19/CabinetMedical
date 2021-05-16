import {TimestampEntites} from "../../Generics/timestamp.entities";
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Patient} from "./patient.entity";

@Entity('antecedent')
export class Antecedent
{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nom: string;
    @Column()
    description: string;
    @ManyToMany(() => Patient)
    @JoinTable()
    patient: Patient[]


}
