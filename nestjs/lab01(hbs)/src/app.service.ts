import { Injectable } from '@nestjs/common';
import { appendFile } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getViewName(): string {
    return 'index';
  }
}