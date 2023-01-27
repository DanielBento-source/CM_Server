import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';
import { Naipe } from './entities/naipe.entity';

@Injectable()
export class NaipeService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateNaipeDto) {
    const data: Naipe = { ...dto };

    return this.prisma.naipe.create({
      data,
    });
  }

  findAll() {
    return this.prisma.naipe.findMany();
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
