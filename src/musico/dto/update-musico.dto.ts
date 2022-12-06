import { PartialType } from '@nestjs/swagger';
import { CreateMusicoDto } from './create-musico.dto';

export class UpdateMusicoDto extends PartialType(CreateMusicoDto) {}
