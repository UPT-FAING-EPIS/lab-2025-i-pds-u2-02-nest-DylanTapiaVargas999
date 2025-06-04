import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';

/**
 * Módulo Domain del sistema de notificaciones.
 * 
 * Este módulo agrupa y proporciona los servicios relacionados con la lógica de dominio
 * para la gestión de notificaciones dentro de la aplicación. Permite centralizar la lógica
 * de negocio y facilita la reutilización de los servicios en otros módulos.
 * 
 * Exporta:
 * - DomainService: Servicio principal que contiene la lógica de dominio para notificaciones.
 */
@Module({
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}
