import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { LOG_MST } from './common/log/entities/log.entity';
import { LogService } from './common/log/log.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // 
  private readonly logger = new Logger();

  @Get()
  getHello(): string {
    // console.log(AppController.name);
    this.logger.log('This is Log Test', AppController.name, 'LGCNS');
    // this.logger.error('This is Log error Test', AppController.name, 'DDD');

    return this.appService.getHello();
  }
}
