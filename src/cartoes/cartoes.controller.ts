import { Body, Controller, Get, Param, Post } from '@nestjs/common';

type Cartao = {
  id: number;
  numero: string;
  bandeira: string;
  validade: string;
};

const _cartoes: Cartao[] = [
  {
    id: 1,
    numero: '1234 5678 9012 3456',
    bandeira: 'visa',
    validade: '10/20',
  },
  {
    id: 2,
    numero: '1234 5678 9012 5050',
    bandeira: 'mastercard',
    validade: '10/25',
  },
];

@Controller('cartoes')
export class CartoesController {
  @Get()
  obterTodos(): Cartao[] {
    return _cartoes;
  }

  @Get(':id')
  obterPorId(@Param('id') id: number): Cartao {
    return _cartoes.find((cartao) => cartao.id === id);
  }

  @Post()
  criar(@Body() cartao: Cartao): Cartao {
    return cartao;
  }
}
