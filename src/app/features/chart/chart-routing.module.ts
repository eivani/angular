import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart.component';
import { ReportComponent } from './components/report/report.component';


const routes: Routes = [
  {
    path: '', component: ChartComponent, children: [
      { path: 'report', component: ReportComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
