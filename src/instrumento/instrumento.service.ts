import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';
import { Instrumento } from './entities/instrumento.entity';

@Injectable()
export class InstrumentoService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateInstrumentoDto): Promise<Instrumento> {
    const data: Instrumento = { ...dto };

    return this.prisma.instrumento
      .create({
        data,
      })
      .catch(this.handleError);
  }

  findAll(): Promise<Instrumento[]> {
    return this.prisma.instrumento.findMany();
  }

  async findById(id: string): Promise<Instrumento> {
    const record = await this.prisma.instrumento.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o Id '${id}' não encontrado.`);
    }
    return record;
  }
  async findOne(id: string): Promise<Instrumento> {
    return this.findById(id);
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
