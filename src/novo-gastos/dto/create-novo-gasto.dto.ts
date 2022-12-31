import { IsInt, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateNovoGastoDto {
  @IsNumber({ maxDecimalPlaces: 2 }, { message: ({ property }) => `${property} deve ser um número decimal` })
  valor: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  parcelas: number;

  @IsString()
  data_compra: string;

  @IsInt()
  cartaoId: number;
}
