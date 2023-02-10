import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfileService {
  private profileSelect = {
    id: true,
    nickname: true,
    password: false,
    imageProfile: true,
    occupation: true,
    createdAt: true,
    updatedAt: false,
  };
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProfileDto): Promise<Profile> {
    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais!');
    }
    delete dto.confirmPassword;

    const data: Profile = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };

    return this.prisma.profile
      .create({
        data,
        select: this.profileSelect,
      })
      .catch(this.handleError);
  }

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany({
      select: this.profileSelect,
    });
  }

  async findById(id: string): Promise<Profile> {
    const record = await this.prisma.profile.findUnique({
      where: { id },
      select: this.profileSelect,
    });

    if (!record) {
      throw new NotFoundException(`Registro com o Id '${id}' não encontrado.`);
    }
    return record;
  }
  async findOne(id: string): Promise<Profile> {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findById(id);

    if (dto.password) {
      if (dto.password != dto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não são iguais!');
      }
    }

    delete dto.confirmPassword;

    const data: Partial<Profile> = {
      ...dto,
    };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.profile
      .update({
        where: { id },
        data,
        select: this.profileSelect,
      })
      .catch(this.handleError);
  }

  async remove(id: string) {
    await this.findById(id);

    await this.prisma.profile.delete({
      where: { id },
    });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

    if (!lastErrorLine) {
      console.log(error);
    }
    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
