import { Controller } from '@nestjs/common';
import { TaskService } from './task.service';

// import { MessagePattern, Payload } from '@nestjs/microservices';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateTaskDto } from './dto/update-task.dto';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  // @MessagePattern('createTask')
  // create(@Payload() createTaskDto: CreateTaskDto) {
  //   return this.taskService.create(createTaskDto);
  // }

  // @MessagePattern('findAllTask')
  // findAll() {
  //   return this.taskService.findAll();
  // }

  // @MessagePattern('findOneTask')
  // findOne(@Payload() id: number) {
  //   return this.taskService.findOne(id);
  // }

  // @MessagePattern('updateTask')
  // update(@Payload() updateTaskDto: UpdateTaskDto) {
  //   return this.taskService.update(updateTaskDto.id, updateTaskDto);
  // }

  // @MessagePattern('removeTask')
  // remove(@Payload() id: number) {
  //   return this.taskService.remove(id);
  // }
}
