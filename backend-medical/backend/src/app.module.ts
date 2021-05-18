import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import {PremierMiddleware} from "./middlewares/premier.middleware";
import {logger} from "./middlewares/logger.middleware";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './User/user.module';
import  * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
      PatientModule,
      ConfigModule.forRoot({
        isGlobal: true
      }),
    TypeOrmModule.forRoot({
      type: 'mysql' ,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(PremierMiddleware).forRoutes('patients')
        .apply(logger).forRoutes('patients')


  }
}
