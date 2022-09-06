import { NestFactory } from '@nestjs/core';
import { AppModule } from  './app.module'

// Main process
async function bootstrap() {


 //  const job = new JobMananager();

 //  console.log( await job.save2db() );


 const app =  await NestFactory.create(AppModule);

}

bootstrap();