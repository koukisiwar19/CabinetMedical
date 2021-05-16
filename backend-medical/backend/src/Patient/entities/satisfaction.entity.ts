import {TimestampEntites} from "../../Generics/timestamp.entities";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('satisfaciton')
export class SatisfactionEntity extends TimestampEntites{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    satisfaction: string
    @Column()
    Remarques: string


}
