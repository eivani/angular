import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  token = 'bearer ' + 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyNDUiLCJmaXJzdE5hbWUiOiLZhtuM2YXYpyIsImxhc3ROYW1lIjoi2YfZhdiqIiwiQ29tcGFueUlEIjoiMiIsIkJyYW5jaElEIjoiMDEiLCJuYmYiOjE2Njg2ODg1OTksImV4cCI6MTY2ODc3NDk5OSwiaWF0IjoxNjY4Njg4NTk5fQ.2ME_40iYDJ--w36OWum4RPp3XaN7s6yALX3kuwxwc3eaOMLxzn31UJsYb4-36-Olh62PveFMHuC-VD515ANQHw'
a=true
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    localStorage.getItem('storageKey');
    
      request=request.clone({
        headers: request.headers.set(
          'Authorization',
          this.token
        )
    })
    

    return next.handle(request);
  }
}
