import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'NOVO_GASTOS', synchronize: true })
export class NovoGasto {
  @PrimaryColumn({ generated: 'increment' })
  id: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  valor: number;
}
