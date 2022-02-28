import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { Response } from 'express';
import { CartoesService } from './cartoes.service';
import { CreateCartoeDto } from './dto/create-cartoe.dto';
import { UpdateCartoeDto } from './dto/update-cartoe.dto';

@Controller('cartoes')
export class CartoesController {
  constructor(private readonly cartoesService: CartoesService) {}

  @Post()
  create(@Body() createCartoeDto: CreateCartoeDto) {
    return this.cartoesService.create(createCartoeDto);
  }

  @Get()
  findAll() {
    return this.cartoesService.findAll();
  }

  @Get(':id')
  async findOne(@Res() resp: Response, @Param('id') id: string) {
    try {
      const card = await this.cartoesService.findOne(+id);

      resp.status(200).send(card);
    } catch (error) {
      resp.status(400).send({ message: error.message });
    }
  }

  @Patch(':id')
  async update(@Res() resp: Response, @Param('id') id: string, @Body() updateCartoeDto: UpdateCartoeDto) {
    try {
      await this.cartoesService.update(+id, updateCartoeDto);
    } catch (error) {
      resp.status(400).send({ message: error.message });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartoesService.remove(+id);
  }
}
