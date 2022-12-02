import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMusicoDto } from './dto/create-musico.dto';
import { Musico } from './entities/musico.entity';

@Injectable()
export class MusicoService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Musico[]> {
    return this.prisma.musico.findMany();
  }

  findOne(id: string): Promise<Musico> {
    return this.prisma.musico.findUnique({ where: { id } });
  }

  create(dto: CreateMusicoDto): Promise<Musico> {
    const data: Musico = { ...dto };

    return this.prisma.musico.create({ data });
  }
}
