import { Injectable } from '@nestjs/common';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';
import { Naipe } from './entities/naipe.entity';

@Injectable()
export class NaipeService {
  naipes: Naipe[] = [];

  create(createNaipeDto: CreateNaipeDto) {
    const naipe: Naipe = { id: 'random_id', ...createNaipeDto };

    this.naipes.push(naipe);

    return naipe;
  }

  findAll() {
    return this.naipes;
  }

  findOne(id: number) {
    return `This action returns a #${id} naipe`;
  }

  update(id: number, updateNaipeDto: UpdateNaipeDto) {
    return `This action updates a #${id} naipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} naipe`;
  }
}
