import { PartialType } from '@nestjs/mapped-types';
import { CreateSendGridDto } from './create-send-grid.dto';

export class UpdateSendGridDto extends PartialType(CreateSendGridDto) {}
