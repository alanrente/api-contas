import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { PessoaEntity } from 'pessoas/entities/pessoa.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { Fatura } from './dto/fatura.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { GastosEntity } from './entities/gasto.entity';

@Injectable()
export class GastosService {
  constructor(
    @InjectRepository(GastosEntity) private gastosRepository: Repository<GastosEntity>,
    private dataSource: DataSource,
  ) {}

  create(createGastoDto: CreateGastoDto) {
    if (Array.isArray(createGastoDto)) throw Error('createGastoDto must be an object');
    validate(createGastoDto).catch((error) => {
      throw new Error(error.message);
    });
    return this.gastosRepository.save(createGastoDto);
  }

  createMany(createManyGastoDto: CreateGastoDto[]) {
    return this.gastosRepository.query(
      `call ${process.env.DB_SCHEMA}.create_many_gastos('${JSON.stringify(createManyGastoDto)}')`,
    );
  }

  async findAll() {
    // return await this.gastosRepository.find();

    // return await this.dataSource.getRepository(GastosEntity).find({
    //   relations: {
    //     pessoa_id: true,
    //   },
    // });

    return await this.dataSource
      .getRepository(GastosEntity)
      .createQueryBuilder('gasto')
      .select(['gasto', 'pessoa.nome', 'cartao.nome', 'cartao.id'])
      .leftJoin('gasto.pessoa_id', 'pessoa')
      .leftJoin('gasto.cartao_id', 'cartao')
      .getMany();

    // return await this.dataSource
    //   .getRepository(PessoaEntity)
    //   .createQueryBuilder('pessoa')
    //   .select(['pessoa.nome'])
    //   .leftJoinAndSelect(
    //     (subQuery) =>
    //       subQuery.select(['gasto.descricao', 'gasto.pessoa_id', 'gasto.valor']).from(GastosEntity, 'gasto'),
    //     'gasto',
    //     'pessoa.id = gasto.pessoa_id',
    //   )
    //   .getRawMany();
  }

  async findAllCurrentInvoice() {
    const fatura_mes: Fatura[] = await this.gastosRepository.query(`select * from ${process.env.DB_SCHEMA}.fatura_mes`);

    return fatura_mes.map((gasto) => ({ ...gasto, valor: Number(gasto.valor) }));
  }

  async findOne(id: number) {
    const user = await this.gastosRepository.findOne({ where: { id: id } });

    if (!user) throw new NotFoundException('Nenhum gasto encontrado');

    return user;
  }

  update(id: number, updateGastoDto: UpdateGastoDto) {
    return `This action updates a #${id} gasto`;
  }

  remove(id: number) {
    return `This action removes a #${id} gasto`;
  }
}
