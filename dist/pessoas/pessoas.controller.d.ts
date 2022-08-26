import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Response } from 'express';
export declare class PessoasController {
    private readonly pessoasService;
    constructor(pessoasService: PessoasService);
    create(createPessoaDto: CreatePessoaDto, res: Response): Response<any, Record<string, any>>;
    findAll(): Promise<import("./entities/pessoa.entity").PessoaEntity[]>;
    findOne(id: string): Promise<import("./entities/pessoa.entity").PessoaEntity>;
    update(id: string, updatePessoaDto: UpdatePessoaDto, res: Response): Promise<Response<any, Record<string, any>>>;
    remove(id: string): string;
}
