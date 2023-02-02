import { Module } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { InstrumentoController } from './instrumento.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InstrumentoController],
  providers: [InstrumentoService],
})
export class InstrumentoModule {}
