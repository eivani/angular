import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private api: ApiService) { }

  getCompanyList(prm: {}) {
    return this.api.post('http://46.100.47.160:8013/api/CrmCompany/GetPage', prm)
  }

}
