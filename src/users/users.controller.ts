import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController{
    constructor (private readonly userService: UsersService) {}

    @Get()
    async findAll() {
        var d = await this.userService.findAll()

        return d;
    }

    @Get(':id')
    async findOne(@Param(':id') id: number) {
        var d = await this.userService.findOne(id)

        return d;

        // return {
        //     data: await this.userService.findOne(id)
        // }
    }
}