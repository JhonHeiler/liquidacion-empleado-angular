import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EmpleadoModel } from 'src/app/domain/models/empleado.model';
import { EmpleadoRepository } from 'src/app/domain/repositories/empleado.repository';
import { HttpService } from 'src/app/core/http/http.service';
import { EmpleadoEntity } from './entities/empleado-entity';
import { EmpleadoImplementationRepositoryMapper } from './mappers/empleado-repository.mapper';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoImplementationRepository extends EmpleadoRepository {
  private readonly BASE_URL = 'http://localhost:8080/api/empleados'; 
  private empleadoMapper = new EmpleadoImplementationRepositoryMapper();

  constructor(private httpService: HttpService) {
    super();
  }

  obtenerEmpleados(): Observable<EmpleadoModel[]> {
    return this.httpService
      .get<EmpleadoEntity>(this.BASE_URL)
      .pipe(map((res) => res.map(this.empleadoMapper.mapFrom)));
  }
}
