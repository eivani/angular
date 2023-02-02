import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { CrmSystemComponent } from './crm-system.component';

const routes: Routes = [
  {
    path: '', component: CompaniesComponent 
    // path: '', component: CrmSystemComponent, children: [
    //   { path: 'tsmiBasicInformation/tsmiCompany', component: CompaniesComponent },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmSystemRoutingModule { }
