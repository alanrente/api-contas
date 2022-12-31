import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'LANCAMENTOS', synchronize: true })
export class NovoGasto {
  @PrimaryColumn({ generated: 'increment', name: 'ID_LANCAMENTO' })
  id: number;

  @Column({ name: 'VALOR_MES', type: 'decimal', precision: 10, scale: 2 })
  valor: number;

  @Column({ name: 'FK_ID_COMPRA', type: 'integer' })
  idCompra: number;

  @Column({ type: 'date', name: 'DATA_LANCAMENTO' })
  dataLancamento: string;
}
