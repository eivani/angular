import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { GridComponent } from './components/grid/grid.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

const routes: Routes = [
  {
    path: '', component: ChartComponent, children: [
      { path: 'pie', component: PieChartComponent },
      { path: 'bar', component: BarChartComponent },
      { path: 'grid', component: GridComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
