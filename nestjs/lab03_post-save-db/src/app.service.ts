import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  // ConfigService 불러오기
  constructor(private readonly config: ConfigService) {
    // console.log(process.env.WORKDB_HOST);
  }


  getHello(): string {
    return 'Hello World!';
  }
}
