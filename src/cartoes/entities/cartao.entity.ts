import { Compra } from 'novo-gastos/entities/compra.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cartoes', synchronize: false })
export class CartaoEntity {
  @PrimaryColumn({ generated: 'increment' })
  id: number;
  @Column({ type: 'varchar' })
  nome: string;
  @Column({ type: 'integer' })
  dia_vencimento: number;
  @Column({ type: 'varchar', length: 4 })
  final_numero: string;
  @Column({ type: 'varchar', nullable: true })
  obs: string;

  @OneToMany(() => Compra, (compra) => compra.cartao)
  compras: Compra[];
}
