import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<Naipe> {
    return this.prisma.naipe.findUnique({
      where: { id },
    });
  }

  update(id: number, updateNaipeDto: UpdateNaipeDto) {
    return `This action updates a #${id} naipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} naipe`;
  }
}
