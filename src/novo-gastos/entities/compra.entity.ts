import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'COMPRA' })
export class Compra {
  @PrimaryColumn({ name: 'ID_COMPRA', generated: 'increment' })
  id: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  valor: number;
  @Column({ type: 'integer' })
  parcelas: number;
}
