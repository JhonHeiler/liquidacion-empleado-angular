import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    LoadingComponent,
    TableComponent,
    TitleComponent,
  ],
  exports: [
    LoadingComponent,
    TableComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
