import { IsString } from 'class-validator';

export class CreateNaipeDto {
  @IsString()
  nome: string;
}
