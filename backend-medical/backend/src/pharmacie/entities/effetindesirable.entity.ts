import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TimestampEntites} from "../../Generics/timestamp.entities";

@Entity('effetindesirable')
export class effetindesirableEntity extends TimestampEntites {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nomEffet: string
}
