import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Logger } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Response } from 'express';

@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Post()
  create(@Body() createPessoaDto: CreatePessoaDto, @Res() res: Response) {
    try {
      this.pessoasService.create(createPessoaDto);

      return res.send({ status: 201, message: 'Pessoa criada com sucesso' });
    } catch (error) {
      Logger.error(error.message);
      return res.status(500).send({ status: 500, message: error.message });
    }
  }

  @Get()
  findAll() {
    return this.pessoasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoasService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePessoaDto: UpdatePessoaDto, @Res() res: Response) {
    const pessoas = await this.pessoasService.findOne(+id);

    if (!pessoas) return res.status(404).send({ status: 404, message: 'Nenhuma pessoa encontrada' });

    try {
      await this.pessoasService.update(+id, updatePessoaDto);
      return res.status(200).send({ status: 200, message: 'Pessoa atualizada com sucesso' });
    } catch (error) {
      Logger.error(error.message);
      return res.status(500).send({ status: 500, message: error.message });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoasService.remove(+id);
  }
}
