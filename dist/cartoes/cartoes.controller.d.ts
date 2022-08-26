import { Response } from 'express';
import { CartoesService } from './cartoes.service';
import { CreateCartoeDto } from './dto/create-cartoe.dto';
import { UpdateCartoeDto } from './dto/update-cartoe.dto';
export declare class CartoesController {
    private readonly cartoesService;
    constructor(cartoesService: CartoesService);
    create(createCartoeDto: CreateCartoeDto): Promise<CreateCartoeDto & import("./entities/cartao.entity").CartaoEntity>;
    findAll(): Promise<import("./entities/cartao.entity").CartaoEntity[]>;
    findOne(resp: Response, id: string): Promise<void>;
    update(resp: Response, id: string, updateCartoeDto: UpdateCartoeDto): Promise<void>;
    remove(id: string): string;
}
