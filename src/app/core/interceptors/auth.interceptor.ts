import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TokenStorageService } from '../serviese/token-storage.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private tokenStorageService: TokenStorageService,
    private alertService: ToastService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.tokenStorageService?.getToken();
    
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError(error => {
        this.catchErrorHandler(error);
        return throwError(() => new Error(error.statusText));
      })
    );
  }

  catchErrorHandler(resultError: any) {

    switch (resultError.status) {
      case 500:
        this.alertService.showError('اشکال در برقراری ارتباط با سرور', '');
        break;
      case 504:
        this.alertService.showError('ترافیک درخواست لطفا مجددا تلاش نمایید.', '');
        break;
      case 401:
        this.alertService.showError(' لطفا مجددا لاگین نمایید.', '');
        break;
      case 400:
        this.alertService.showError('صفحه مورد نظر یافت نشد', '');
        break;
      case 404:
        this.alertService.showError('درخواست مورد نظر یافت نشد.', '');
        break;

      default:
        this.alertService.showError('لطفا مجددا تلاش نمایید', '');
        break;
    }

    return;
  }

}
