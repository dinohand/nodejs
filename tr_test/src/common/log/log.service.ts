import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
  create(body: any) {
    return 'This action adds a new log';
  }

  findAll() {
    return `This action returns all log`;
  }

  findOne(id: number) {
    return `This action returns a #${id} log`;
  }

  remove(id: number) {
    return `This action removes a #${id} log`;
  }
}
