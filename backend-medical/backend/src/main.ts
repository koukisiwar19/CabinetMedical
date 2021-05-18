import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import  * as morgan from 'morgan';
import  * as dotenv from 'dotenv';
import "reflect-metadata";

import {FlubErrorHandler} from "nestjs-flub/dist";
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev' ));
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted:true
  }));
  /*app.useGlobalFilters(new FlubErrorHandler({
    theme: 'light',
    quote:true
  }));*/
  await app.listen(process.env.APP_PORT);
}
bootstrap();
