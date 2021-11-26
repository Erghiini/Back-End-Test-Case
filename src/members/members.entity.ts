import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from "typeorm";  

@Entity()
export class Member {
    @PrimaryColumn()
    code: string;

    @Column()
    name: string;

    @Column()
    isPenalty: Boolean;

    @Column()
    penaltyDate: Date;
}