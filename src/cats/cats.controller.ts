import { Controller, Get, Post, Param, Query, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateCatsDto } from './create-cat.dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {

  @Post()
  create(@Body() createCatsDto: CreateCatsDto, @Res() res: Response) {
    console.log(createCatsDto);
    res.status(HttpStatus.CREATED).send()
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get('/filter')
  findByFilter(@Query('name') name): string {
    return `This action returns a #${name} cat`; 
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}