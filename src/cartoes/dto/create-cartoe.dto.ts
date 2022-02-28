import { Optional } from '@nestjs/common';

export class CreateCartoeDto {
  bank: string;
  final_number: string;
  vencimento: string;
  @Optional()
  buy_date_best: string;
}
