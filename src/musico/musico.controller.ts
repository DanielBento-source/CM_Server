import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMusicoDto } from './dto/create-musico.dto';
import { MusicoService } from './musico.service';

@ApiTags('musico')
@Controller('musico')
export class MusicoController {
  constructor(private readonly musicoService: MusicoService) {}

  @Get()
  findAll() {
    return this.musicoService.findAll();
  }

  @Post()
  create(@Body() dto: CreateMusicoDto) {
    return this.musicoService.create(dto);
  }
}
