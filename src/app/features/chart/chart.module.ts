import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

import { DxPieChartModule } from 'devextreme-angular';
import { GridComponent } from './components/grid/grid.component';
import { DxDataGridModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    ChartComponent,
    PieChartComponent,
    BarChartComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    DxPieChartModule,
    DxDataGridModule,
    DxChartModule
  ]
})
export class ChartModule { }
