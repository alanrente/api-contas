import { Column, Entity } from 'typeorm';

@Entity({ name: 'cartoes', synchronize: false })
export class CartaoEntity {
  @Column({ type: 'integer', name: 'id', primary: true, nullable: true })
  id: number;
  @Column({ type: 'varchar' })
  nome: string;
  @Column({ type: 'integer' })
  dia_vencimento: number;
  @Column({ type: 'varchar', length: 4 })
  final_numero: string;
  @Column({ type: 'varchar', nullable: true })
  obs: string;
}
