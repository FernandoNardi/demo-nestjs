import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private _catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this._catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this._catsService.findAll();
  }
}