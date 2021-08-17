import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMethods as methods } from 'src/app/models/enums/methods';
import { AuthService } from '../state/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private readonly _auth: AuthService) {

  }

  intercept(
    httpRequest: HttpRequest<methods.GET | methods.POST | methods.PUT | methods.PATCH>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
       return next.handle(httpRequest);
     }

}
