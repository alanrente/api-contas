import { Injectable } from '@nestjs/common';
import { CreateSendGridDto } from './dto/create-send-grid.dto';
import { UpdateSendGridDto } from './dto/update-send-grid.dto';
import { enviarEmail } from 'utils/enviarEmail';

@Injectable()
export class SendGridService {
  async create(createSendGridDto: CreateSendGridDto) {
    try {
      await enviarEmail(createSendGridDto.text);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  findAll() {
    return `This action returns all sendGrid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sendGrid`;
  }

  update(id: number, updateSendGridDto: UpdateSendGridDto) {
    return `This action updates a #${id} sendGrid`;
  }

  remove(id: number) {
    return `This action removes a #${id} sendGrid`;
  }
}
