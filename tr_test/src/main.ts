import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule,
    {
      logger: ['error', 'warn', 'debug']
    });

  await app.listen(3200, async () => { console.log(`Application is running on: ${await app.getUrl()}`); });
}
bootstrap();
