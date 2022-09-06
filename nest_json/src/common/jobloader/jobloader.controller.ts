import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JobloaderService } from './jobloader.service';

@Controller()
export class JobloaderController {
  constructor(private readonly jobloaderService: JobloaderService) {}



  @MessagePattern('findAllJobloader')
  findAll() {
    return this.jobloaderService.findAll();
  }

  @MessagePattern('findOneJobloader')
  findOne(@Payload() id: number) {
    return this.jobloaderService.findOne(id);
  }



}
