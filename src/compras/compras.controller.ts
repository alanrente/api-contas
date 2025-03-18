import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, Request, UseGuards } from '@nestjs/common';
import { CompraService } from './compras.service';
import { CreateNovoGastoDto } from './dto/create-novo-gasto.dto';
import { UpdateNovoGastoDto } from './dto/update-novo-gasto.dto';
import { Response } from 'express';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'auth/guard/jwt-auth.guard';

@ApiTags('Compra')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('novo-gastos')
export class CompraController {
  constructor(private readonly novoGastosService: CompraService) {}

  @Get('fatura')
  async getFaturaMes(@Query('anoMes') anoMes: string, @Res() res: Response) {
    return this.novoGastosService
      .faturaMes(anoMes)
      .then((result) => res.status(result.status).send(result))
      .catch((err) => res.status(500).send(err));
  }

  @ApiQuery({ name: 'ano', type: 'string', required: false, example: '2023' })
  @ApiQuery({ name: 'mes', type: 'string', required: false, example: '05' })
  @Get('teste-get-lancamentos')
  async getTCompras(@Query() { ano, mes }: { ano: string; mes: string }, @Request() req) {
    return this.novoGastosService.findLancamentos(req.user.username, ano, mes);
  }

  @Get('teste-get-compras')
  async getTLancamentos() {
    return this.novoGastosService.findCompras();
  }

  @Get('compras')
  async getCompras() {
    return this.novoGastosService.findAllBuys();
  }

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
