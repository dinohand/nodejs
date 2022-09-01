import { Module } from '@nestjs/common';
import { SoscService } from './sosc.service';
import { SoscController } from './sosc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PRDT_MST } from './entities/sosc.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '13.209.154.237',
      port: 54905,
      username: 'middleware',
      password: 'password',
      database: 'work',
      entities: [PRDT_MST],
      synchronize: true,
    }),
    SoscModule,
  ],
  controllers: [SoscController],
  providers: [SoscService]
})
export class SoscModule { }
