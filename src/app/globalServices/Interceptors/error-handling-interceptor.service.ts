import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpMethods as methods } from 'src/app/models/enums/methods';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandlingInterceptorService implements HttpInterceptor {

  intercept(
    httpRequest: HttpRequest<methods.GET | methods.POST | methods.PUT | methods.PATCH>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
       return next.handle(httpRequest).pipe(retry(2));
     }

}
