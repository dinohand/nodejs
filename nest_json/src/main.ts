import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'

// Main process
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000, async () => { console.log(`Application is running on: ${await app.getUrl()}`); });

    //const app = await NestFactory.create(AppModule);

}

bootstrap();