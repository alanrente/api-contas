import { Test, TestingModule } from '@nestjs/testing';
import { NovoGastosService } from './novo-gastos.service';

describe('NovoGastosService', () => {
  let service: NovoGastosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NovoGastosService],
    }).compile();

    service = module.get<NovoGastosService>(NovoGastosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
