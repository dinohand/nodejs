import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoscModule } from './sosc/sosc.module';

@Module({
  imports: [SoscModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
