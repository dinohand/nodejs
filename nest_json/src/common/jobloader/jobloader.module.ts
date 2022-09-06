import { Module } from '@nestjs/common';
import { JobloaderService } from './jobloader.service';
import { JobloaderController } from './jobloader.controller';

@Module({
  controllers: [JobloaderController],
  providers: [JobloaderService]
})
export class JobloaderModule {}
