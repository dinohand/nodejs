import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { JobMananager } from './JoobLoader';

@Module({
  controllers: [AppController],
  providers: [AppService, JobMananager]
})
export class AppModule { }
