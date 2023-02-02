import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { AdminGridComponent } from './components/admin-grid/admin-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AdminGridComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    AgGridModule,
  ],
  exports:[
    ReactiveFormsModule, 
    FormsModule,
    AgGridModule,
    AdminGridComponent,

  ]
})
export class SharedModule { }
