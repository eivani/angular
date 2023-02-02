import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiModel } from '../models/base-api.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ApiService: ApiService) { }

  login(prm: {}): Observable<BaseApiModel> {
    const url = 'http://46.100.47.160:8013/api/Login/LoginNew'
    return this.ApiService.post(url, prm)
  }

  getCompanies(): Observable<BaseApiModel> {
    return this.ApiService.get('http://46.100.47.160:8013/api/Login/GetCompany')
  }

  getBranch(id: string | null | undefined): Observable<BaseApiModel> {
    return this.ApiService.post('http://46.100.47.160:8013/api/Login/GetCompanyid', { id })
  }

}
