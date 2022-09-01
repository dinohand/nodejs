import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {});


  //=======================================================================
  // Static Assets
  // 	static contents access / index.hbs를 호출 할 수 있게한다.
  app.useStaticAssets(join(__dirname, '../', 'public'));
  app.setBaseViewsDir(join(__dirname, '../', 'views'));
  // express engine - ejs|hbs|hjs|jade|pug|twig|vash
  // app.setViewEngine('hbs');
  app.setViewEngine('ejs');


  await app.listen(3200, async () => { console.log(`Application is running on: ${await app.getUrl()}`); });

}
bootstrap();
