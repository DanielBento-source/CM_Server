import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { NaipeService } from './naipe.service';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Naipe } from './entities/naipe.entity';
import { HttpCode } from '@nestjs/common/decorators';

@ApiTags('naipe')
@Controller('naipe')
export class NaipeController {
  constructor(private readonly naipeService: NaipeService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um naipe',
  })
  create(@Body() dto: CreateNaipeDto): Promise<Naipe> {
    return this.naipeService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os naipes',
  })
  findAll(): Promise<Naipe[]> {
    return this.naipeService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar um naipe pelo Id',
  })
  findOne(@Param('id') id: string): Promise<Naipe> {
    return this.naipeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um naipe pelo Id',
  })
  update(@Param('id') id: string, @Body() dto: UpdateNaipeDto): Promise<Naipe> {
    return this.naipeService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um naipe pelo Id',
  })
  remove(@Param('id') id: string) {
    this.naipeService.remove(id);
  }
}
