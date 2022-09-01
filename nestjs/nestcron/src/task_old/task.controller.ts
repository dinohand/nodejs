import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly tasksService: TaskService) { }


  @Get()
  getHello() {
    console.log('@Get');
    return this.tasksService.getHello();
  }

}
