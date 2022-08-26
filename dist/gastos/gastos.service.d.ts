import { DataSource, Repository } from 'typeorm';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { GastosEntity } from './entities/gasto.entity';
export declare class GastosService {
    private gastosRepository;
    private dataSource;
    constructor(gastosRepository: Repository<GastosEntity>, dataSource: DataSource);
    create(createGastoDto: CreateGastoDto): Promise<CreateGastoDto & GastosEntity>;
    createMany(createManyGastoDto: CreateGastoDto[]): Promise<any>;
    findAll(): Promise<GastosEntity[]>;
    findAllCurrentInvoice(): Promise<{
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
    findOne(id: number): Promise<GastosEntity>;
    update(id: number, updateGastoDto: UpdateGastoDto): string;
    remove(id: number): string;
}
