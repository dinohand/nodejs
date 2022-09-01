import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

// import { ServeStaticModule } from '@nestjs/serve-static';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'debug'],
    // logger: false,
  });

  //=======================================================================
  // Configuration
  // config.env에 환경변수를 읽어들임
  //
  const configService = app.get(ConfigService);

  //  const __PORT__ = process.env.PORT || 3000;
  const __PORT__ = configService.get('HOST_PORT');

  const __APIDOC_URI__ = configService.get('API_DOC') || 'apidoc';
  const __VERSION__ = configService.get('API_VERSION') || '';

  await app.listen(__PORT__, async () => { console.log(`Application is running on: ${await app.getUrl()}`); });
}

bootstrap();
