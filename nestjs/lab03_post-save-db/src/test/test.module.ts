import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PRDT_MST } from './entities/test.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `${process.cwd()}/config/${process.env.NODE_ENV}.config.env`,
        `${process.cwd()}/config/${process.env.NODE_ENV}.dbconfig.env`,
      ],
    }),
    TypeOrmModule.forFeature([PRDT_MST])
    ,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.WORKDB_HOST,
      port: Number(process.env.WORKDB_PORT),
      username: process.env.WORKDB_USER,
      password: process.env.WORKDB_PASSWORD,
      database: process.env.WORKDB_DATABASE,
      synchronize: (process.env.NODE_ENV == 'prd') ? false : true,

      logging: false,
      entities: [PRDT_MST],
      migrations: [],
      subscribers: []
    })
  ],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule { }
