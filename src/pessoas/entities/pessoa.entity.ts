import { Column, Entity } from 'typeorm';

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
}
