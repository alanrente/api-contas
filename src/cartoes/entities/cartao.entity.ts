import { Column, Entity } from 'typeorm';

@Entity({ name: 'cartoes', synchronize: false })
export class CartaoEntity {
  @Column({ type: 'integer', name: 'id', primary: true, nullable: true })
  id: number;
  @Column({ type: 'varchar' })
  bank: string;
  @Column({ type: 'varchar' })
  final_number: string;
  @Column({ type: 'timestamp' })
  vencimento: string;
  @Column({ type: 'timestamp' })
  buy_date_best: string;
}
