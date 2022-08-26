import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoaEntity } from './entities/pessoa.entity';
export declare class PessoasService {
    private repository;
    constructor(repository: Repository<PessoaEntity>);
    create(createPessoaDto: CreatePessoaDto): Promise<CreatePessoaDto & PessoaEntity>;
    findAll(): Promise<PessoaEntity[]>;
    findOne(id: number): Promise<PessoaEntity>;
    update(id: number, updatePessoaDto: UpdatePessoaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
