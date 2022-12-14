import { IsInt, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class CreateNovoGastoDto {
  @IsNumber({ maxDecimalPlaces: 2 }, { message: ({ property }) => `${property} deve ser um número decimal` })
  valor: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  parcela: number;
}
