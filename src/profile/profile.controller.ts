import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Profile } from './entities/profile.entity';
import { HttpCode } from '@nestjs/common/decorators';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly userService: ProfileService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um usuário.',
  })
  create(@Body() dto: CreateProfileDto): Promise<Profile> {
    return this.userService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os usuários',
  })
  findAll(): Promise<Profile[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar um usuário pelo Id',
  })
  findOne(@Param('id') id: string): Promise<Profile> {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um usuário pelo Id',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um usuário pelo Id',
  })
  remove(@Param('id') id: string) {
    this.userService.remove(id);
  }
}
