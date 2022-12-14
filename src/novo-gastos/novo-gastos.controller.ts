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
    return this.novoGastosService
      .create(createNovoGastoDto)
      .then(({ raw }) => {
        res.send(raw);
      })
      .catch((err) => res.status(500).send(err));
  }

  @Get()
  findAll() {
    return this.novoGastosService.findAll();
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
