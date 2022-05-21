import { Optional } from '@nestjs/common';

export class CreateCartoeDto {
  nome: string;
  final_numero: string;
  dia_vencimento: number;
  @Optional()
  obs: string;
}
