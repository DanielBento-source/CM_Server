import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NaipeService } from './naipe.service';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('naipe')
@Controller()
export class NaipeController {
  constructor(private readonly naipeService: NaipeService) {}

  @Post('naipe')
  create(@Body() dto: CreateNaipeDto) {
    return this.naipeService.create(dto);
  }

  @Get('naipe')
  findAll() {
    return this.naipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.naipeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNaipeDto: UpdateNaipeDto) {
    return this.naipeService.update(+id, updateNaipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.naipeService.remove(+id);
  }
}
