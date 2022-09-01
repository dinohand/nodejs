import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TEST_TABL } from './entities/test.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [
      `${process.cwd()}/config/${process.env.NODE_ENV}.config.env`,
      `${process.cwd()}/config/${process.env.NODE_ENV}.dbconfig.env`,
      //        `${process.env.NODE_ENV}.dbconfig.env`,
    ],
  }),
  // TypeOrmModule.forFeature([TEST_TABL]),
  // TypeOrmModule.forRoot({
  //   type: 'mysql',
  //   host: process.env.LDB_HOST,
  //   port: Number(process.env.LDB_PORT),
  //   username: process.env.LDB_USER,
  //   password: process.env.LDB_PASSWORD,
  //   database: process.env.LDB_DATABASE,
  //   // synchronize: (process.env.NODE_ENV == 'prd') ? false : true,
  //   synchronize: false,

  //   logging: true,
  //   entities: [TEST_TABL],
  //   migrations: [],
  //   subscribers: []
  // })
  ],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {

  constructor() {
  //   console.debug(process.env.LDB_HOST);
  }
}
