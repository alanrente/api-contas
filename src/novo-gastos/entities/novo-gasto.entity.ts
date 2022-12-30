import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'NOVO_GASTOS', synchronize: true })
export class NovoGasto {
  @PrimaryColumn({ generated: 'increment', name: 'ID_NOVO_GASTO' })
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;

  @Column({ type: 'integer', nullable: true })
  idCompra: number;

  @Column({ type: 'date', name: 'DATA_LANCAMENTO' })
  dataMovimento: string;
}
