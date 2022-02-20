import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  findOne(@Param('id') id: string) {
    return this.cartoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartoeDto: UpdateCartoeDto) {
    return this.cartoesService.update(+id, updateCartoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartoesService.remove(+id);
  }
}
