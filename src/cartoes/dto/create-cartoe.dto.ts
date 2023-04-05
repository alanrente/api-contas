import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateCartoeDto {
  @ApiProperty()
  nome: string;
  @ApiProperty({
    description: 'Os 4 últimos dígitos',
  })
  final_numero: string;
  @ApiProperty({
    description: 'O dia do vencimento da fatura',
    default: 10,
  })
  dia_vencimento: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  obs: string;
}
