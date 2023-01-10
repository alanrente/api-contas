import { Optional } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePessoaDto {
  @IsNotEmpty()
  nome: string;
  @Optional()
  apelido: string;
  @Optional()
  telefone: string;
  @IsEmail()
  email: string;
}
