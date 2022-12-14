import { Test, TestingModule } from '@nestjs/testing';
import { NovoGastosController } from './novo-gastos.controller';
import { NovoGastosService } from './novo-gastos.service';

describe('NovoGastosController', () => {
  let controller: NovoGastosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovoGastosController],
      providers: [NovoGastosService],
    }).compile();

    controller = module.get<NovoGastosController>(NovoGastosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
