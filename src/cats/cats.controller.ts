import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@UseFilters(new HttpExceptionFilter())
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