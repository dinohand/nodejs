import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @MessagePattern('findAllJobloader')
  findAll() {
    return this.appService.findAll();
  }

  @MessagePattern('findOneJobloader')
  findOne(@Payload() id: number) {
    return this.appService.findOne(id);
  }

}
