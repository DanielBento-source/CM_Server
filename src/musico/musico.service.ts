import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMusicoDto } from './dto/create-musico.dto';
import { Musico } from './entities/musico.entity';

@Injectable()
export class MusicoService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.musico.findMany();
  }

  create(dto: CreateMusicoDto) {
    const data: Musico = { ...dto };

    return this.prisma.musico.create({ data });
  }
}
