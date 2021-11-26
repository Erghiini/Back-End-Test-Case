import { Controller, Get, Query, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { get } from 'http';

@Controller('books')
export class BooksController{
    constructor (private readonly bookService: BooksService) {}
    
    @Get()
    async findAll() {
        return await this.bookService.findAll()
    }

    @Get('filter')
    async findOne(@Query() filterData): Promise<any> {
        var code = filterData.code;
        return await this.bookService.findOne(code)
    }
}