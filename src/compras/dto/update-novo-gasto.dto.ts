import { PartialType } from '@nestjs/mapped-types';
import { CreateNovoGastoDto } from './create-novo-gasto.dto';

export class UpdateNovoGastoDto extends PartialType(CreateNovoGastoDto) {}
