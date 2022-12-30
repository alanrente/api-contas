import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { NovoGastosService } from './novo-gastos.service';
import { CreateNovoGastoDto } from './dto/create-novo-gasto.dto';
import { UpdateNovoGastoDto } from './dto/update-novo-gasto.dto';
import { Response } from 'express';

@Controller('novo-gastos')
export class NovoGastosController {
  constructor(private readonly novoGastosService: NovoGastosService) {}

  @Post()
  async create(@Body() createNovoGastoDto: CreateNovoGastoDto, @Res() res: Response) {
    const result = await this.novoGastosService.create(createNovoGastoDto);

    return res.status(result.status).send(result);
  }

  @Get()
  async findAll() {
    return await this.novoGastosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novoGastosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovoGastoDto: UpdateNovoGastoDto) {
    return this.novoGastosService.update(+id, updateNovoGastoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novoGastosService.remove(+id);
  }
}
