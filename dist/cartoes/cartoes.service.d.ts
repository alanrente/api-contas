import { Repository } from 'typeorm';
import { CreateCartoeDto } from './dto/create-cartoe.dto';
import { UpdateCartoeDto } from './dto/update-cartoe.dto';
import { CartaoEntity } from './entities/cartao.entity';
export declare class CartoesService {
    private repository;
    constructor(repository: Repository<CartaoEntity>);
    create(createCartoeDto: CreateCartoeDto): Promise<CreateCartoeDto & CartaoEntity>;
    findAll(): Promise<CartaoEntity[]>;
    findOne(id: number): Promise<CartaoEntity>;
    update(id: number, updateCartoeDto: UpdateCartoeDto): Promise<void>;
    remove(id: number): Promise<{
        message: any;
        status: number;
    }>;
}
