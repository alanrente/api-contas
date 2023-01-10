import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import MessageResponse from 'utils/messageResponse';
import { CreateCartoeDto } from './dto/create-cartoe.dto';
import { UpdateCartoeDto } from './dto/update-cartoe.dto';
import { CartaoEntity } from './entities/cartao.entity';

@Injectable()
export class CartoesService {
  constructor(@InjectRepository(CartaoEntity) private repository: Repository<CartaoEntity>) {}

  async create(createCartoeDto: CreateCartoeDto) {
    const cartao = await this.repository.save(createCartoeDto);

    return cartao;
  }

  findAll(): Promise<CartaoEntity[]> {
    return this.repository.find({ order: { id: 'ASC' } });
  }

  async findOne(id: number): Promise<CartaoEntity> {
    const cartao = await this.repository.findOne({ where: { id } });

    if (!cartao) throw new Error('Cartão não encontrado');

    return cartao;
  }

  async update(id: number, updateCartoeDto: UpdateCartoeDto) {
    this.findOne(id);
    try {
      await this.repository.update(id, updateCartoeDto);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async remove(id: number) {
    const cartao = await this.repository.findOne({ where: { id } });

    return await this.repository
      .delete({ id })
      .then((res) =>
        res.affected > 0
          ? new MessageResponse({ ...cartao, status: 'deletado' }).success()
          : new MessageResponse('Não existe').internalError(400),
      )
      .catch((err) => {
        return new MessageResponse(err).internalError();
      });
  }
}
