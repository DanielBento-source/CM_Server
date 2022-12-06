import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';
import { Instrumento } from './entities/instrumento.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstrumentoService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Instrumento[]> {
    return this.prisma.instrumento.findMany();
  }

  async findById(id: string): Promise<Instrumento> {
    const record = await this.prisma.instrumento.findUnique({
      where: {
        id,
      },
    });

    if (!record) {
      throw new NotFoundException(
        `Registro do Instrumento com o ID '${id}' não encontrado.`,
      );
    }
    return record;
  }

  async findOne(id: string): Promise<Instrumento> {
    return this.findById(id);
  }

  create(dto: CreateInstrumentoDto): Promise<Instrumento> {
    const data: Instrumento = { ...dto };
    return this.prisma.instrumento
      .create({
        data,
      })
      .catch(this.handleError);
  }

  async update(id: string, dto: UpdateInstrumentoDto): Promise<Instrumento> {
    await this.findById(id);
    const data: Partial<Instrumento> = { ...dto };
    return this.prisma.instrumento
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }

  async remove(id: string) {
    await this.findById(id);

    await this.prisma.instrumento.delete({
      where: {
        id,
      },
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
