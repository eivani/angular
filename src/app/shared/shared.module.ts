import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { AdminGridComponent } from './components/admin-grid/admin-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DxPieChartModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { MaterialGridComponent } from './components/material-grid/material-grid.component';



@NgModule({
  declarations: [
    AdminGridComponent,
    DatePickerComponent,
    MaterialGridComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    AgGridModule,

    DxPieChartModule,
    DxDataGridModule,
    DxChartModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatTreeModule,
    MatCheckboxModule,
  ],
  exports:[
    ReactiveFormsModule, 
    FormsModule,
    AgGridModule,
    AdminGridComponent,
    DatePickerComponent,

    DxPieChartModule,
    DxDataGridModule,
    DxChartModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatTreeModule,
    MatCheckboxModule,
    DynamicFormComponent
  ]
})
export class SharedModule { }
