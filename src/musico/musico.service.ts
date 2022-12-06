import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMusicoDto } from './dto/create-musico.dto';
import { UpdateMusicoDto } from './dto/update-musico.dto';
import { Musico } from './entities/musico.entity';

@Injectable()
export class MusicoService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Musico[]> {
    return this.prisma.musico.findMany();
  }

  async findById(id: string): Promise<Musico> {
    const record = await this.prisma.musico.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(
        `Registro do musíco com o ID '${id}' não encontrado.`,
      );
    }
    return record;
  }

  async findOne(id: string): Promise<Musico> {
    return this.findById(id);
  }

  create(dto: CreateMusicoDto): Promise<Musico> {
    const data: Musico = { ...dto };

    return this.prisma.musico.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateMusicoDto): Promise<Musico> {
    await this.findById(id);
    const data: Partial<Musico> = { ...dto };
    return this.prisma.musico
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }

  async remove(id: string) {
    await this.findById(id);

    await this.prisma.musico.delete({
      where: { id },
    });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLines || 'Algum erro ocorreu ao executar a operação.',
    );
  }
}
