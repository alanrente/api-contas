import { Column, Entity } from 'typeorm';

type Conteudo = {
  [key: string]: any;
};

@Entity({ name: 'publicas', synchronize: false })
export class PublicaEntity {
  @Column({ type: 'bigint', primary: true, nullable: true, name: 'id_publica' })
  idPublica: number;
  @Column({ type: 'varchar' })
  nome: string;
  @Column({ type: 'json', nullable: true })
  conteudo: Conteudo;
}
