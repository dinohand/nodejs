import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  //  const __PORT__ = process.env.PORT || 3000;
  const __PORT__ = configService.get('HOST_PORT');
  await app.listen(__PORT__, async () => { console.log(`Application is running on: ${await app.getUrl()}`); });
}
bootstrap();
