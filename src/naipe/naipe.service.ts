import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';
import { Naipe } from './entities/naipe.entity';

@Injectable()
export class NaipeService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateNaipeDto): Promise<Naipe> {
    const data: Naipe = { ...dto };

    return this.prisma.naipe.create({
      data,
    });
  }

  findAll(): Promise<Naipe[]> {
    return this.prisma.naipe.findMany();
  }

  async findOne(id: string): Promise<Naipe> {
    const record = await this.prisma.naipe.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o Id '${id}' não encontrado.`);
    }
    return record;
  }

  update(id: string, dto: UpdateNaipeDto): Promise<Naipe> {
    const data: Partial<Naipe> = { ...dto };

    return this.prisma.naipe.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.prisma.naipe.delete({
      where: { id },
    });
  }
}
