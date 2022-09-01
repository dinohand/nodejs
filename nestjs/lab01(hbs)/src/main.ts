import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressHandlebars } from 'express-handlebars';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  //  const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // express engine - ejs|hbs|hjs|jade|pug|twig|vash
  app.setViewEngine('hbs');

  // app.setViewEngine('hbs');

  // console.debug(__dirname);
  await app.listen(3000, async ()=> { console.log(`Application is running on: ${await app.getUrl()}`); });
}

bootstrap();