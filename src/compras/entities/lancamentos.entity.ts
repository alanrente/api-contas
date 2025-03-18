import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Compra } from './compra.entity';

@Entity({ name: 'LANCAMENTOS', synchronize: true })
export class Lancamentos {
  @PrimaryColumn({ generated: 'increment', name: 'ID_LANCAMENTO' })
  id: number;

  @Column({ name: 'VALOR_MES', type: 'decimal', precision: 10, scale: 2 })
  valor: number;

  // @Column({ name: 'FK_ID_COMPRA', type: 'integer' })
  // idCompra: number;

  @Column({ type: 'date', name: 'DATA_LANCAMENTO' })
  dataLancamento: string;

  @ManyToOne(() => Compra, (compra) => compra.lancamentos)
  @JoinColumn({ name: 'COMPRA_ID', referencedColumnName: 'id' })
  compra: Compra;
}
