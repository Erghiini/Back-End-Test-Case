import { Controller, Get, Query, Param } from '@nestjs/common';
import { MembersService } from './members.service';
import { get } from 'http';

@Controller('members')
export class MembersController{
    constructor (private readonly memberService: MembersService) {}
    
    @Get()
    async findAll() {
        var d = await this.memberService.findAll()

        return d;
    }

    @Get('filter')
    async findOne(@Query() filterData): Promise<any> {
        var code = filterData.code;
        return await this.memberService.findOne(code)
    }
}