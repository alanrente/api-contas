import { Compra } from 'novo-gastos/entities/compra.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'pessoas', synchronize: false })
export class PessoaEntity {
  @Column({ type: 'integer', primary: true, nullable: true })
  id: number;
  @Column({ type: 'varchar' })
  nome: string;
  @Column({ type: 'varchar', nullable: true })
  apelido: string;
  @Column({ type: 'varchar', nullable: true })
  telefone: string;
  @Column({ type: 'varchar', nullable: true })
  email: string;

  @OneToMany(() => Compra, (compra) => compra.pessoa)
  compras: Compra[];
}
