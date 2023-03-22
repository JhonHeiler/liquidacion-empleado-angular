import { Observable } from 'rxjs';
import { UseCase } from 'src/app/base/use-case';
import { EmpleadoModel } from '../models/empleado.model';
import { EmpleadoRepository } from '../repositories/empleado.repository';

export class ObtenerEmpleadosUseCase implements UseCase<void, EmpleadoModel[]> {
  constructor(private empleadoRepository: EmpleadoRepository) {}

  execute(): Observable<EmpleadoModel[]> {
    return this.empleadoRepository.obtenerEmpleados();
  }
}
