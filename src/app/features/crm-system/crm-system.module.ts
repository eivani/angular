import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmSystemRoutingModule } from './crm-system-routing.module';
import { CrmSystemComponent } from './crm-system.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CrmSystemComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    CrmSystemRoutingModule,
    SharedModule,
  ]
})
export class CrmSystemModule { }
