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
    summary: 'Cadastrar um instrumento',
  })
  create(@Body() createInstrumentoDto: CreateInstrumentoDto) {
    return this.instrumentoService.create(createInstrumentoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os instrumentos',
  })
  findAll() {
    return this.instrumentoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar um instrumento pelo Id',
  })
  findOne(@Param('id') id: string) {
    return this.instrumentoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um instrumento pelo Id',
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
    summary: 'Remover um instrumento pelo Id',
  })
  remove(@Param('id') id: string) {
    return this.instrumentoService.remove(id);
  }
}
