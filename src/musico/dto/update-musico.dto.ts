import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicoDto } from './create-musico.dto';

export class UpdateMusicoDto extends PartialType(CreateMusicoDto) {}
