import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {

  findAll() {
    return `This action returns all jobloader`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobloader`;
  }



  remove(id: number) {
    return `This action removes a #${id} jobloader`;
  }
}
