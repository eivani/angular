import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart.component';
import { ReportOneComponent } from './components/report-one/report-one.component';
import { ReportTwoComponent } from './components/report-two/report-two.component';
import { ReportComponent } from './components/report/report.component';


const routes: Routes = [
  {
    path: '', component: ChartComponent, children: [
      { path: 'rep1', component: ReportComponent },
      { path: 'rep2', component: ReportOneComponent },
      { path: 'rep3', component: ReportTwoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
