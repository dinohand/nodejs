import { Injectable } from '@nestjs/common';
import { JobMananager } from './JoobLoader';



@Injectable()
export class AppService {
  constructor(private readonly jobMananager: JobMananager) {

  }

  async findAll() {
    // return `This action returns all jobloader`;
    const result = await this.jobMananager.selectData();
    //     return JSON.parse( result );
    console.debug('[findAll]')
    console.debug(result);
  }

  findOne(id: number) {
    return `This action returns a #${id} jobloader`;
  }



  remove(id: number) {
    return `This action removes a #${id} jobloader`;
  }
}
