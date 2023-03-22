import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent {
  @Input() columnsKeys: string[] = [];
  @Input() columnsNames: string[] = [];
  @Input() dataSource: { [key: string]: any }[] = [];
  readonly LIMIT = 3;

  constructor() {}
}
