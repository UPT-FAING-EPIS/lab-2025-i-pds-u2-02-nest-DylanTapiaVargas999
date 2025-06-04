import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';

/**
 * Módulo Domain.
 * Proporciona los servicios relacionados con la lógica de dominio de la aplicación.
 * Exporta DomainService para su uso en otros módulos.
 */
@Module({
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}
