import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMusicoDto } from './dto/create-musico.dto';
import { MusicoService } from './musico.service';

@ApiTags('musico')
@Controller('musico')
export class MusicoController {
  constructor(private musicoService: MusicoService) {}

  @Get()
  findAll() {
    return this.musicoService.findAll();
  }

  @Post()
  create(@Body() createMusicoDto: CreateMusicoDto) {
    return this.musicoService.create(createMusicoDto);
  }
}
