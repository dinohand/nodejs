import { Controller, Get } from '@nestjs/common';
import { DbService } from './common/db/db.service';

@Controller()
export class AppController {
  constructor(
    private readonly dbService: DbService
  ) { }

  // private readonly appService: AppService;
  // private readonly dbService: DbService;

  @Get()
  getHello() {
    let result = this.dbService.findAll();
    console.log(result)
    return result;
  }

  @Get('save')
  save() {
    console.time();
    return this.dbService.save();
  }
}
