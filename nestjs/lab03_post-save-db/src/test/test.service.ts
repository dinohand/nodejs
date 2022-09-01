import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { PRDT_MST, I_PRDT_MST } from './entities/test.entity';


@Injectable()
export class TestService {
  constructor(@InjectRepository(PRDT_MST)
  private prdtRepository: Repository<I_PRDT_MST>) {
  }
  create(p: I_PRDT_MST) {

    try {
      this.prdtRepository.insert({
        // ID: p.ID,
        PRDT_CODE: p.PRDT_CODE,
        PRDT_NAME: p.PRDT_NAME,
        PRDT_SPEC: p.PRDT_SPEC,
        PRDT_OPTN: p.PRDT_OPTN,
        MODL_CODE: p.MODL_CODE,
        MODL_NAME: p.MODL_NAME,
        SALS_CODE: p.SALS_CODE,
        SALS_NAME: p.SALS_NAME,
        SALS_LIMT: p.SALS_LIMT,
        JOB_ACTR: p.JOB_ACTR,
        //  JOB_DTTM: p.JOB_DTTM,
        JOB_STAT: p.JOB_STAT,
        RMRK: p.RMRK
      });
      return 1; // 'SUCCESS';
    } catch (e) {
      console.log(e);
      return -1; //'Fail';
    }
  }

  findAll(): Promise<PRDT_MST[]> {
    return this.prdtRepository.find();

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
