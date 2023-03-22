import { CartaoEntity } from 'cartoes/entities/cartao.entity';
import { PessoaEntity } from 'pessoas/entities/pessoa.entity';
export declare class Compra {
    id: number;
    valor: number;
    parcelas: number;
    data_compra: string;
    cartao: CartaoEntity;
    pessoa: PessoaEntity;
}
