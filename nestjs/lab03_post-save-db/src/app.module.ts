import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `${process.cwd()}/config/${process.env.NODE_ENV}.config.env`,
        `${process.cwd()}/config/${process.env.NODE_ENV}.dbconfig.env`,
      ],
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('[main.ts', `${process.cwd()}/config/${process.env.NODE_ENV}.dbconfig.env`);
  }
}

