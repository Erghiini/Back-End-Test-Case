import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "./members.entity";
import { Repository } from "typeorm"; 

@Injectable()
export class MembersService {
    constructor(@InjectRepository(Member) private readonly membersRepository: Repository<Member>) {}

    findAll(){
        return this.membersRepository.find();
    }

    findOne(code: string) {
        return this.membersRepository.findOneOrFail(code);
    }
}