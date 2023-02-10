import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'nickname do usuário, Utilzado no login, deve ser único.',
    example: 'SAOBENTOCAMPINASSP',
  })
  nickname: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca.',
  })
  @ApiProperty({
    description: 'Senha do usuário para login.',
    example: 'Abcd@1234',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha.',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário.',
    example: 'https://avatars.githubusercontent.com/u/62419185?v=4',
  })
  imageProfile: string;

  @IsString()
  @ApiProperty({
    description: 'Ocupação do dono do perfil.',
    example: 'Instrutor',
  })
  occupation: string;
}
