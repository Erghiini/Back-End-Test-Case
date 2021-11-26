import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Borrow } from "./borrows.entity";
import { Repository } from "typeorm"; 

@Injectable()
export class BorrowsService {
    constructor (@InjectRepository(Borrow) private readonly borrowRepository: Repository<Borrow>) {}

    findAll(){
        return this.borrowRepository.find();
    }

    findByMember(code: any) {
        return this.borrowRepository.query(`
            SELECT borrow.*, member.name, book.title, book.author
            FROM member
            LEFT JOIN borrow
                ON borrow.memberCode = member.code
            LEFT JOIN book
                ON book.code = borrow.bookCode
            WHERE member.code = '`+ code +`'
        `);
    }

    findByBook(code: any) {
        return this.borrowRepository.query(`
            SELECT borrow.*, member.name, book.title, book.author
            FROM member
            LEFT JOIN borrow
                ON borrow.memberCode = member.code
            LEFT JOIN book
                ON book.code = borrow.bookCode
            WHERE book.code = '`+ code +`'
        `);
    }

    countBorrow(data: any) {
        let memberCode = data.memberCode;

        return this.borrowRepository.query(`
            SELECT count(*) AS countBorrow
            FROM member
            LEFT JOIN borrow
                ON borrow.memberCode = member.code
            LEFT JOIN book
                ON book.code = borrow.bookCode
            WHERE member.code = '`+ memberCode +`'
                AND isReturn = false
        `);
    }

    getMember(memberCode: any) {
        return this.borrowRepository.query(`
            SELECT *
            FROM member
            WHERE code = '`+ memberCode +`'
        `);
    }

    getBook(bookCode: any) {
        return this.borrowRepository.query(`
            SELECT *
            FROM book
            WHERE code = '`+ bookCode +`'
        `);
    }

    create(memberCode, bookCode) : any {
        return this.borrowRepository.query(`
            INSERT INTO borrow (
                memberCode, bookCode, borrowDate, returnDate
            ) VALUES (
                '`+ memberCode +`', '`+ bookCode +`', CURRENT_TIME, ''
            )
        `);
    }

    updateBookStock(bookCode) : any {
        return this.borrowRepository.query(`
            UPDATE book SET stock = (stock - 1)
            WHERE code = '`+ bookCode +`'
        `);
    }
}