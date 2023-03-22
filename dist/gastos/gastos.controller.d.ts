import { GastosService } from './gastos.service';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { Response } from 'express';
export declare class GastosController {
    private readonly gastosService;
    constructor(gastosService: GastosService);
    create(createGastoDto: CreateGastoDto, res: Response): Promise<Response<any, Record<string, any>>>;
    createMany(arrayJson: CreateGastoDto[], res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(): Promise<import("./entities/gasto.entity").GastosEntity[]>;
    findAllRelations(): Promise<{
        valor: number;
        id: number;
        id_cartao: number;
        cartao: string;
        id_pessoa: number;
        pessoa: string;
        descricao: string;
        data_compra: string;
        parcelas: string;
        data_final: string;
    }[]>;
    findOne(id: string): Promise<import("./entities/gasto.entity").GastosEntity>;
    update(id: string, updateGastoDto: UpdateGastoDto): string;
    remove(id: string): string;
}
