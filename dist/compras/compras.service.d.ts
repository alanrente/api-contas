import { Repository } from 'typeorm';
import { CreateNovoGastoDto } from './dto/create-novo-gasto.dto';
import { UpdateNovoGastoDto } from './dto/update-novo-gasto.dto';
import { Compra } from './entities/compra.entity';
import { Lancamentos } from './entities/lancamentos.entity';
export declare class CompraService {
    private novoGastosRepository;
    private compraRepository;
    private logger;
    constructor(novoGastosRepository: Repository<Lancamentos>, compraRepository: Repository<Compra>);
    create(createNovoGastoDto: CreateNovoGastoDto): Promise<{
        message: any;
        status: number;
    }>;
    findAllBuys(): Promise<{
        id: number;
        valor: number;
        parcelas: number;
        data_compra: string;
        pessoa: string;
        cartao: string;
        numero: string;
    }[]>;
    findAll(): Promise<{
        valor: number;
        id: number;
        idCompra: number;
        dataLancamento: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateNovoGastoDto: UpdateNovoGastoDto): string;
    remove(id: number): string;
    faturaMes(anoMes: string): Promise<{
        message: any;
        status: number;
    }>;
}
