import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Logger } from '@nestjs/common';
import { Response } from 'express';
import { CartoesService } from './cartoes.service';
import { CreateCartoeDto } from './dto/create-cartoe.dto';
import { UpdateCartoeDto } from './dto/update-cartoe.dto';

@Controller('cartoes')
export class CartoesController {
  private log: Logger;
  constructor(private readonly cartoesService: CartoesService) {
    this.log = new Logger('CartoesController');
  }

  @Post()
  async create(@Body() createCartoeDto: CreateCartoeDto, @Res() res: Response) {
    this.log.debug('CreateCartoeDto:', JSON.stringify(createCartoeDto));
    return await this.cartoesService
      .create(createCartoeDto)
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(500).json(err));
  }

  @Get()
  findAll() {
    this.log.debug('findAll');
    return this.cartoesService.findAll();
  }

  @Get(':id')
  async findOne(@Res() resp: Response, @Param('id') id: string) {
    try {
      const card = await this.cartoesService.findOne(+id);

      resp.status(200).send(card);
    } catch (error) {
      Logger.error(error.message);
      resp.status(400).send({ message: error.message });
    }
  }

  @Patch(':id')
  async update(@Res() resp: Response, @Param('id') id: string, @Body() updateCartoeDto: UpdateCartoeDto) {
    try {
      await this.cartoesService.update(+id, updateCartoeDto);
      resp.status(200).send();
    } catch (error) {
      Logger.error(error.message);
      resp.status(400).send({ message: 'Cartão não pode ser atualizado' });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() resp: Response) {
    return await this.cartoesService.remove(+id).then((res) => resp.status(res.status).send(res));
  }
}
