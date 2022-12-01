import { Controller, Get, Post } from '@nestjs/common';
import { MusicoService } from './musico.service';

@Controller('musico')
export class MusicoController {
  constructor(private musicoService: MusicoService) {}

  @Get()
  findAll() {
    return this.musicoService.findAll();
  }

  @Post()
  create() {
    return this.musicoService.create();
  }
}
