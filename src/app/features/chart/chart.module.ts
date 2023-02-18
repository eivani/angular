import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { PieChartComponent } from '../../shared/components/pie-chart/pie-chart.component';
import { BarChartComponent } from '../../shared/components/bar-chart/bar-chart.component';


import { GridComponent } from '../../shared/components/grid/grid.component';
import { ReportComponent } from './components/report/report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportOneComponent } from './components/report-one/report-one.component';
import { ReportTwoComponent } from './components/report-two/report-two.component';

@NgModule({
  declarations: [
    ChartComponent,
    PieChartComponent,
    BarChartComponent,
    GridComponent,
    ReportComponent,
    ReportOneComponent,
    ReportTwoComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    SharedModule
  ]
})
export class ChartModule { }
