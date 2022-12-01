import { Module } from '@nestjs/common';
import { MusicoController } from './musico.controller';
import { MusicoService } from './musico.service';

@Module({
  controllers: [MusicoController],
  providers: [MusicoService],
})
export class MusicoModule {}
