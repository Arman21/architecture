import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMethods as methods } from 'src/app/models/methods';

@Injectable({
  providedIn: 'root'
})

export class HeadersInterceptorService implements HttpInterceptor {

  intercept(
    httpRequest: HttpRequest<methods.GET | methods.POST | methods.PUT | methods.PATCH>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
       const API_KEY: string = '557701';
       return next.handle(httpRequest.clone({ setHeaders: { API_KEY } }));
     }

}
