import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: [
            `${process.cwd()}/config/${process.env.NODE_ENV}.config.env`,
            `${process.cwd()}/config/${process.env.NODE_ENV}.dbconfig.env`,
          ],
        }),
      ],
    controllers:[TaskController],
    providers: [TaskService],
})

export class TaskModule { }