import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMusicoDto } from './dto/create-musico.dto';
import { UpdateMusicoDto } from './dto/update-musico.dto';
import { Musico } from './entities/musico.entity';
import { MusicoService } from './musico.service';

@ApiTags('musico')
@Controller('musico')
export class MusicoController {
  constructor(private readonly musicoService: MusicoService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os musícos',
  })
  findAll(): Promise<Musico[]> {
    return this.musicoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'visualizar um musíco',
  })
  findOne(@Param('id') id: string): Promise<Musico> {
    return this.musicoService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um musíco',
  })
  create(@Body() dto: CreateMusicoDto): Promise<Musico> {
    return this.musicoService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um musíco pelo Id',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMusicoDto,
  ): Promise<Musico> {
    return this.musicoService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um musíco pelo Id',
  })
  delete(@Param('id') id: string) {
    this.musicoService.delete(id);
  }
}
