import { CartaoEntity } from 'cartoes/entities/cartao.entity';
import { PessoaEntity } from 'pessoas/entities/pessoa.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Lancamentos } from './lancamentos.entity';

@Entity({ name: 'COMPRA' })
export class Compra {
  @PrimaryColumn({ name: 'ID_COMPRA', generated: 'increment' })
  id: number;
  @Column({ name: 'VALOR_COMPRA', type: 'decimal', precision: 10, scale: 2 })
  valor: number;
  @Column({ name: 'PARCELAS', type: 'integer' })
  parcelas: number;
  @Column({ name: 'DATA_COMPRA', type: 'date' })
  data_compra: string;

  @ManyToOne(() => CartaoEntity, (cartaoEntity) => cartaoEntity.compras, { nullable: false })
  cartao: CartaoEntity;

  @ManyToOne(() => PessoaEntity, (pessoa) => pessoa.compras, { nullable: false })
  pessoa: PessoaEntity;

  @OneToMany(() => Lancamentos, (lancamentos) => lancamentos.compra)
  lancamentos: Lancamentos[];
}
