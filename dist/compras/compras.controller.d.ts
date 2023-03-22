import { CompraService } from './compras.service';
import { CreateNovoGastoDto } from './dto/create-novo-gasto.dto';
import { UpdateNovoGastoDto } from './dto/update-novo-gasto.dto';
import { Response } from 'express';
export declare class CompraController {
    private readonly novoGastosService;
    constructor(novoGastosService: CompraService);
    getFaturaMes(anoMes: string, res: Response): Promise<Response<any, Record<string, any>>>;
    getCompras(): Promise<{
        id: number;
        valor: number;
        parcelas: number;
        data_compra: string;
        pessoa: string;
        cartao: string;
        numero: string;
    }[]>;
    create(createNovoGastoDto: CreateNovoGastoDto, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(): Promise<{
        valor: number;
        id: number;
        idCompra: number;
        dataLancamento: string;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateNovoGastoDto: UpdateNovoGastoDto): string;
    remove(id: string): string;
}
