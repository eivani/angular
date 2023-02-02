import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';

import { BaseApiModel } from '../models/base-api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
  ) { }

  post(url: string, prm: {} | {}[]): Observable<BaseApiModel> {
    return this.http.post<BaseApiModel>(url, prm).pipe(
      map((result) => {
        this.errorHandeler(result)
        return result
      })
    );
  }

  get(url: string): Observable<BaseApiModel> {
    return this.http.get<BaseApiModel>(url);
  }

  errorHandeler(result: BaseApiModel) {
    if (result.statusCode === 400 && result.errors.length > 0) {
      result.errors.forEach(error => {
        this.toastService.showError(error.Desc!);
      });
    } else if (result.statusCode === 200) {
      this.toastService.showSuccess('عملیات با موفقیت انجام شد');
    }
  }

}
