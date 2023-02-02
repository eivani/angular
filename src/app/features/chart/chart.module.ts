import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { PieChartComponent } from '../../shared/components/pie-chart/pie-chart.component';
import { BarChartComponent } from '../../shared/components/bar-chart/bar-chart.component';

import { DxPieChartModule } from 'devextreme-angular';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { DxDataGridModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [
    ChartComponent,
    PieChartComponent,
    BarChartComponent,
    GridComponent,
    ReportComponent
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
