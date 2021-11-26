import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "./members.entity";
import { Repository } from "typeorm"; 

@Injectable()
export class MembersService {
    constructor (@InjectRepository(Member) private readonly memberRepository: Repository<Member>) {}

    findAll(){
        return this.memberRepository.find();
    }

    findOne(code: any) {
        return this.memberRepository.findOneOrFail(code);
    }
}