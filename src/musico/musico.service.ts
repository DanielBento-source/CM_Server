import { Injectable } from '@nestjs/common';
import { CreateMusicoDto } from './dto/create-musico.dto';
import { Musico } from './entities/musico.entity';

@Injectable()
export class MusicoService {
  musicos: Musico[] = [];

  findAll() {
    return this.musicos;
  }

  create(createMusicoDto: CreateMusicoDto) {
    const musico: Musico = { id: ' random_id', ...createMusicoDto };

    this.musicos.push(musico);
    return musico;
  }
}
