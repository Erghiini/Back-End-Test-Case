import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from "typeorm";  

@Entity()
export class Borrow {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    memberCode: string;

    @Column()
    bookCode: string;

    @Column()
    borrowDate: Date;

    @Column()
    returnDate: Date;

    @Column()
    isReturn: Boolean;
}