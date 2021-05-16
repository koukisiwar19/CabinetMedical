import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TimestampEntites} from "../../Generics/timestamp.entities";
import {FormatEnum} from "../../enums/format.enum";

@Entity('medicament')
export class medicamentEntity extends TimestampEntites{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nomMedicament: string
    @Column()
    nomGenerique: string
    @Column()
    type: string
    @Column()
    quantite: number
    @Column()
    DateValidite: Date
    @Column({
        type: "enum",
        enum: FormatEnum,
        default: FormatEnum.orales
    })
    forme: string

}
