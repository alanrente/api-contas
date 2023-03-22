import { Compra } from 'compras/entities/compra.entity';
export declare class CartaoEntity {
    id: number;
    nome: string;
    dia_vencimento: number;
    final_numero: string;
    obs: string;
    compras: Compra[];
}
