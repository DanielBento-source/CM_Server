import { PartialType } from '@nestjs/swagger';
import { CreateInstrumentoDto } from './create-instrumento.dto';

export class UpdateInstrumentoDto extends PartialType(CreateInstrumentoDto) {}
