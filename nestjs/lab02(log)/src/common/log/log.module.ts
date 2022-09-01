import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LOG_MST } from './entities/log.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        `${process.cwd()}/config/${process.env.NODE_ENV}.config.env`,
        `${process.cwd()}/config/${process.env.NODE_ENV}.dbconfig.env`,
      ],
    }),
    TypeOrmModule.forFeature([LOG_MST])
    ,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: (process.env.NODE_ENV == 'prd') ? false : true,
      // synchronize: false,

      logging: false,
      entities: [LOG_MST],
      migrations: [],
      subscribers: []
    })
  ],
  controllers: [LogController],
  providers: [LogService]
})
export class LogModule { }
