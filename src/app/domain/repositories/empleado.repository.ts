import { Observable } from 'rxjs';
import { EmpleadoModel } from '../models/empleado.model';

export abstract class EmpleadoRepository {
  abstract obtenerEmpleados(): Observable<EmpleadoModel[]>;
}
