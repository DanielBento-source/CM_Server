import { Injectable } from '@nestjs/common';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';

@Injectable()
export class InstrumentoService {
  create(createInstrumentoDto: CreateInstrumentoDto) {
    return 'This action adds a new instrumento';
  }

  findAll() {
    return `This action returns all instrumento`;
  }

  findOne(id: string) {
    return `This action returns a #${id} instrumento`;
  }

  update(id: string, updateInstrumentoDto: UpdateInstrumentoDto) {
    return `This action updates a #${id} instrumento`;
  }

  remove(id: string) {
    return `This action removes a #${id} instrumento`;
  }
}
