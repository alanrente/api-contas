import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException, Res } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { Response } from 'express';

@Controller('gastos')
export class GastosController {
  constructor(private readonly gastosService: GastosService) {}

  @Post()
  async create(@Body() createGastoDto: CreateGastoDto, @Res() res: Response) {
    try {
      await this.gastosService.create(createGastoDto);
      return res.status(201).json({ message: 'Gasto criado com sucesso' }).end();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('many')
  async teste(@Body() arrayJson: CreateGastoDto[], @Res() res: Response) {
    try {
      await this.gastosService.createMany(arrayJson);
      return res.status(201).json({ message: 'Gastos criados com sucesso' }).end();
    } catch (erro: any) {
      throw new InternalServerErrorException(erro.message);
    }
  }

  @Get()
  findAll() {
    return this.gastosService.findAll();
  }

  @Get('fatura-mes')
  findAllRelations() {
    return this.gastosService.findAllCurrentInvoice();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gastosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGastoDto: UpdateGastoDto) {
    return this.gastosService.update(+id, updateGastoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gastosService.remove(+id);
  }
}
