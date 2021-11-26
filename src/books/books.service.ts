import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "./books.entity";
import { Repository } from "typeorm"; 

@Injectable()
export class BooksService {
    constructor (@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

    findAll(){
        return this.bookRepository.find();
    }

    findOne(code: any) {
        return this.bookRepository.findOneOrFail(code);
    }
}