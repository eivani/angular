import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'chart', loadChildren: () => import('./features/chart/chart.module').then(m => m.ChartModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
