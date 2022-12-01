import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicoService {
  findAll() {
    return 'buscar todos os musicos';
  }
  create() {
    return 'cadastrar um musico';
  }
}
