import { Controller, Post, Body, Res } from '@nestjs/common';
import { SendGridService } from './send-grid.service';
import { CreateSendGridDto } from './dto/create-send-grid.dto';
import { Response } from 'express';
// import { UpdateSendGridDto } from './dto/update-send-grid.dto';

@Controller('send-grid')
export class SendGridController {
  constructor(private readonly sendGridService: SendGridService) {}

  @Post()
  async create(@Body() createSendGridDto: CreateSendGridDto, @Res() res: Response) {
    try {
      await this.sendGridService.create(createSendGridDto);
      res.status(201).send({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  // @Get()
  // findAll() {
  //   return this.sendGridService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sendGridService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSendGridDto: UpdateSendGridDto) {
  //   return this.sendGridService.update(+id, updateSendGridDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.sendGridService.remove(+id);
  // }
}
