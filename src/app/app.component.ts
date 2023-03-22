import { Component, OnInit } from '@angular/core';
import { EmpleadoImplementationRepository } from './data/repositories/empleado/empleado-implementation.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  readonly LIMIT = 3;
  readonly title = 'El Trabajo SAS - Liquidación';
  readonly columnsNames: string[] = [
    'Nombre',
    'Salario',
    'Aux. Transporte',
    'Días laborados',
    'Prima',
    'Cesantías',
    'Int. cesantías',
    'Vacaciones',
    'Total liquidación',
  ];
  readonly columnsKeys: string[] = [
    'nombre',
    'salario',
    'auxilioTransporte',
    'diasLaborados',
    'prima',
    'cesantias',
    'interesCesantia',
    'vacaciones',
    'totalLiquidacion',
  ];
  dataSource$ = this.empleadoUC.obtenerEmpleados();

  constructor(private empleadoUC: EmpleadoImplementationRepository) {}
}
