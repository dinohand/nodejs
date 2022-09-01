import { Module } from '@nestjs/common';
import { SoscService } from './sosc.service';
import { SoscController } from './sosc.controller';

@Module({
  controllers: [SoscController],
  providers: [SoscService]
})
export class SoscModule {}
