import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('instrumento')
@Controller('instrumento')
export class InstrumentoController {
  constructor(private readonly instrumentoService: InstrumentoService) {}

  @Post()
  @ApiOperation({
    summary: 'cadastrar um instrumento',
  })
  create(@Body() createInstrumentoDto: CreateInstrumentoDto) {
    return this.instrumentoService.create(createInstrumentoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'visualizar todos instrumentos',
  })
  findAll() {
    return this.instrumentoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'visualizar um instrumento pelo Id',
  })
  findOne(@Param('id') id: string) {
    return this.instrumentoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'editar um instrumento pelo Id',
  })
  update(
    @Param('id') id: string,
    @Body() updateInstrumentoDto: UpdateInstrumentoDto,
  ) {
    return this.instrumentoService.update(id, updateInstrumentoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'remover um instrumento pelo Id',
  })
  remove(@Param('id') id: string) {
    this.instrumentoService.remove(id);
  }
}
