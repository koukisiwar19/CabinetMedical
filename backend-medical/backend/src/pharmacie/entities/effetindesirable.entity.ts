import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TimestampEntites} from "../../Generics/timestamp.entities";

@Entity('effetindesirable')
export class effetindesirableEntity {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nomEffet: string
}
