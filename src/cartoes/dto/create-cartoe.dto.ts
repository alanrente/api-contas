import { IsOptional, IsString } from 'class-validator';

export class CreateCartoeDto {
  nome: string;
  final_numero: string;
  dia_vencimento: number;

  @IsOptional()
  @IsString()
  obs: string;
}
