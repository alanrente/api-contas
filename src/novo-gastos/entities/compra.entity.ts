import { CartaoEntity } from 'cartoes/entities/cartao.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

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
}
