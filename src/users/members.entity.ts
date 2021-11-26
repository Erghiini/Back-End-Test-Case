import { Entity, PrimaryGeneratedColumn, Column , PrimaryColumn} from "typeorm";  

@Entity()
export class Member {
    @PrimaryColumn()
    code: string;

    @Column()
    name: string;
}