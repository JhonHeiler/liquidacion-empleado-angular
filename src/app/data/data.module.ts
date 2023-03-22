import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmpleadoRepository } from '../domain/repositories/empleado.repository';
import { ObtenerEmpleadosUseCase } from '../domain/usecases/empleado.usecase';
import { EmpleadoImplementationRepository } from './repositories/empleado/empleado-implementation.repository';

export const empleadoUseCaseProvider = {
  provide: ObtenerEmpleadosUseCase,
  useFactory: (EmpleadoRepo: EmpleadoRepository) =>
    new ObtenerEmpleadosUseCase(EmpleadoRepo),
  deps: [EmpleadoRepository],
};

@NgModule({
  providers: [
    empleadoUseCaseProvider,
    { provide: EmpleadoRepository, useClass: EmpleadoImplementationRepository },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
