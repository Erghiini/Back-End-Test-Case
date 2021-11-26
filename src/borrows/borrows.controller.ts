import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { get } from 'http';

@Controller('borrows')
export class BorrowsController{
    constructor (private readonly borrowService: BorrowsService) {}
    
    @Get()
    async findAll() {
        return await this.borrowService.findAll()
    }

    @Get('member')
    async findByMember(@Query() filterData): Promise<any> {
        var code = filterData.code;
        return await this.borrowService.findByMember(code)
    }

    @Get('book')
    async findByBook(@Query() filterData): Promise<any> {
        var code = filterData.code;
        return await this.borrowService.findByBook(code)
    }

    @Post()
    async create(
        @Body() data
    ) : Promise<any> {
        let memberCode  = data.memberCode;
        let bookCode    = data.bookCode;

        if (!memberCode) return {error: 'Empty member code'};
        if (!bookCode) return {error: 'Empty book code'};

        var res         = await this.borrowService.countBorrow(data);
        let countBorrow = res[0].countBorrow;
        
        if (countBorrow >= 2) return {error: 'limit books borrow'};

        var res         = await this.borrowService.getMember(memberCode);
        var isPenalty   = res[0].isPenalty;
        
        if (isPenalty) {
            var penaltyDate = res[0].penaltyDate;
            return {error: 'member have penalty'};
        }

        var res         = await this.borrowService.getBook(bookCode);
        var stock       = res[0].stock;

        if (stock <= 0) return {error: 'book not in stock'};

        var res = this.borrowService.create(memberCode, bookCode);

        if (!res.error) {
            var res = this.borrowService.updateBookStock(bookCode);
            return {status: 'success'}
        };
        return res;
    }
}