import { Controller, Get, Res, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { PublicaEntity } from './entities/publica.entity';
import { Repository } from 'typeorm';

@Controller('public')
export class PublicController {
  constructor(@InjectRepository(PublicaEntity) private repository: Repository<PublicaEntity>) {}

  @Get()
  async getAllPublic(@Res() res: Response) {
    const publics = await this.repository.find();
    res.send(publics);
  }

  @Get(':name')
  async getByName(@Param('name') name: string, @Res() res: Response) {
    const dataPublic = await this.repository.findOne({
      where: { nome: name },
    });
    res.send(dataPublic.conteudo);
  }
}
