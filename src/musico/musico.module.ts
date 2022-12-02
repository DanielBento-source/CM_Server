import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MusicoController } from './musico.controller';
import { MusicoService } from './musico.service';

@Module({
  imports: [PrismaModule],
  controllers: [MusicoController],
  providers: [MusicoService],
})
export class MusicoModule {}
