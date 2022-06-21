import { IsInt, MaxLength } from 'class-validator';

export class CreateGastoDto {
  @IsInt()
  pessoa_id: number;
  @IsInt()
  cartao_id: number;
  @MaxLength(255)
  descricao: string;
  data_compra: string;
  data_cadastro: string;
  parcelas: number;
  valor: number;
}
