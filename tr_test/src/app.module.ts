import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './common/db/db.module';
import { DbService } from './common/db/db.service';
import { LogModule } from './common/log/log.module';
import { LogService } from './common/log/log.service';

@Module({
  imports: [DbModule, LogModule],
  controllers: [AppController],
  providers: [DbService, LogService],
})
export class AppModule { }
