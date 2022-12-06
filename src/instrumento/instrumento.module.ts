import { Module } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { InstrumentoController } from './instrumento.controller';

@Module({
  controllers: [InstrumentoController],
  providers: [InstrumentoService]
})
export class InstrumentoModule {}
