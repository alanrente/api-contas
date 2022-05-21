import { Optional } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';

export class CreatePessoaDto {
  @IsNotEmpty()
  nome: string;
  @Optional()
  apelido: string;
  @Optional()
  telefone: string;
}
