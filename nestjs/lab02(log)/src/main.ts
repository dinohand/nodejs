import { NestFactory } from '@nestjs/core';
import { table, timeStamp } from 'console';
import { AppModule } from './app.module';
import { LogService } from './common/log/log.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(LogService));

  await app.listen(3000, async () => { console.log(`Application is running on: ${await app.getUrl()}`); });
}
bootstrap();
