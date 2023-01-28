import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';
import { Naipe } from './entities/naipe.entity';

@Injectable()
export class NaipeService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateNaipeDto): Promise<Naipe> {
    const data: Naipe = { ...dto };

    return this.prisma.naipe
      .create({
        data,
      })
      .catch(this.handleError);
  }

  findAll(): Promise<Naipe[]> {
    return this.prisma.naipe.findMany();
  }

  async findById(id: string): Promise<Naipe> {
    const record = await this.prisma.naipe.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o Id '${id}' não encontrado.`);
    }
    return record;
  }
  async findOne(id: string): Promise<Naipe> {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateNaipeDto): Promise<Naipe> {
    await this.findById(id);
    const data: Partial<Naipe> = { ...dto };

    return this.prisma.naipe
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }

  async remove(id: string) {
    await this.findById(id);

    await this.prisma.naipe.delete({
      where: { id },
    });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
