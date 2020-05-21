import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { logger } from './common/middleware/logger.functional.middleware';

@Module({
  imports: [DogsModule, CatsModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, logger)
      .forRoutes(CatsController);
  }
}
