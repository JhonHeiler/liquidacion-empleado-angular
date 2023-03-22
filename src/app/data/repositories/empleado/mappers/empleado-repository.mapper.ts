import { Mapper } from 'src/app/base/mapper';
import { EmpleadoModel } from 'src/app/domain/models/empleado.model';
import { EmpleadoEntity } from '../entities/empleado-entity';

export class EmpleadoImplementationRepositoryMapper extends Mapper<
  EmpleadoEntity,
  EmpleadoModel
> {
  mapFrom(param: EmpleadoEntity): EmpleadoModel {
    return {
      nombre: `${param.nombre} ${param.apellido}`,
      salario: param.salario,
      auxilioTransporte: param.auxilioTransporte,
      diasLaborados: param.diasLaborados,
      prima: param.prima,
      cesantias: param.cesantias,
      interesCesantia: param.interesCesantia,
      vacaciones: param.vacaciones,
      totalLiquidacion: param.totalLiquidacion,
    };
  }
}
