import { Compra } from 'compras/entities/compra.entity';
export declare class PessoaEntity {
    id: number;
    nome: string;
    apelido: string;
    telefone: string;
    email: string;
    compras: Compra[];
}
