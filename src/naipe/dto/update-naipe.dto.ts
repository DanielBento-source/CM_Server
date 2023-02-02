import { PartialType } from '@nestjs/swagger';
import { CreateNaipeDto } from './create-naipe.dto';

export class UpdateNaipeDto extends PartialType(CreateNaipeDto) {}
