import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'USUARIO' })
export class User {
  @PrimaryColumn({ generated: 'increment', name: 'ID_USUARIO' })
  id: number;

  @Column({ name: 'EMAIL', type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ name: 'NOME_USUARIO', type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', name: 'GOOGLE_UID', nullable: true })
  googleUid: string;

  @Column({ name: 'ROLE', type: 'varchar' })
  role: string;
}
