import { CartaoEntity } from 'cartoes/entities/cartao.entity';
import { PessoaEntity } from 'pessoas/entities/pessoa.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'gastos', synchronize: false })
export class GastosEntity {
  @Column({ type: 'integer', primary: true, nullable: true })
  id: number;
  // @Column({ type: 'integer' })
  @OneToOne(() => PessoaEntity)
  @JoinColumn({ name: 'pessoa_id' })
  pessoa_id: number;
  // @Column({ type: 'integer' })
  @OneToOne(() => CartaoEntity)
  @JoinColumn({ name: 'cartao_id' })
  cartao_id: number;
  @Column({ type: 'varchar', nullable: true })
  descricao: string;
  @Column({ type: 'timestamp' })
  data_compra: Date;
  @Column({ type: 'timestamp', nullable: true })
  data_cadastro: Date;
  @Column({ type: 'integer', nullable: true })
  parcelas: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;
}
