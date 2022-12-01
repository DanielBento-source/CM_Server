import { Injectable } from '@nestjs/common';
import { CreateMusicoDto } from './dto/create-musico.dto';

@Injectable()
export class MusicoService {
  findAll() {
    return 'buscar todos os musicos';
  }

  create(createMusicoDto: CreateMusicoDto) {
    return 'cadastrar um musico: ' + JSON.stringify(createMusicoDto);
  }
}
