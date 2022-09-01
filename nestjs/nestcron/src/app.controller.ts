import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskService } from './task/task.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly taskService: TaskService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  root() {
    this.taskService.getHello();
    this.appService.addCronJob('myjob', '5 * * * * *');
  }
  // getHello(): string {
  //   return this.appService.getHello();
  // }

}
