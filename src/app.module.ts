import { Module } from '@nestjs/common';
import { DogsController } from './dogs/dogs.controller';
import { CatsController } from './cats/cats.controller';
import { DogsService } from './dogs/dogs.service';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [DogsController, CatsController],
  providers: [DogsService, CatsService],
})
export class AppModule {}
