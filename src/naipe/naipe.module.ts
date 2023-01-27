import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NaipeController } from './naipe.controller';
import { NaipeService } from './naipe.service';

@Module({
  imports: [PrismaModule],
  controllers: [NaipeController],
  providers: [NaipeService],
})
export class NaipeModule {}
