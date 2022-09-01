import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { TEST_TABL } from './entities/test.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestDataSource } from './test.DataSource';



@Injectable()
export class TestService {
  // constructor(@InjectRepository(TEST_TABL)
  // private repo: Repository<TEST_TABL>){
  //     console.log(repo);

  // }

  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }


  findAll(): Promise<TEST_TABL[]> {
    console.debug('날 불렀어 ?');

    return TestDataSource.manager.find(TEST_TABL);
    //  return this.repo.find();
    // return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
