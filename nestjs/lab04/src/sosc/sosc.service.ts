import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSoscDto } from './dto/create-sosc.dto';
import { UpdateSoscDto } from './dto/update-sosc.dto';
import { PRDT_MST } from './entities/sosc.entity';

@Injectable()
export class SoscService {
  constructor(
    @InjectRepository(PRDT_MST)
    private pRepository: Repository<PRDT_MST>,
  ) { }


  create(createSoscDto: CreateSoscDto) {
    return 'This action adds a new sosc';
  }

  async findAll(): Promise<PRDT_MST[]> {
    // return `This action returns all sosc`;
    try {
      return await this.pRepository.find();
    }
    catch (e) {
      console.log(e);
      return;
    }

  }

  findOne(id: number) {
    return `This action returns a #${id} sosc`;
  }

  update(id: number, updateSoscDto: UpdateSoscDto) {
    return `This action updates a #${id} sosc`;
  }

  remove(id: number) {
    return `This action removes a #${id} sosc`;
  }
}
