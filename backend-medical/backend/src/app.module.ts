import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import {PremierMiddleware} from "./middlewares/premier.middleware";
import {logger} from "./middlewares/logger.middleware";
import {HelmetMiddleware} from "@nest-middlewares/helmet";
import {FlubErrorHandler} from "nestjs-flub/dist";

@Module({
  imports: [PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(PremierMiddleware).forRoutes('patients')
        .apply(logger).forRoutes('patients')
        .apply(HelmetMiddleware).forRoutes('')

  }
}
