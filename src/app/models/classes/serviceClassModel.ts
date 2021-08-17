import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMethods as methods } from '../enums/methods';

export class classModel implements HttpInterceptor {

  constructor(private readonly _injector?: any) {

  }

  intercept(
    request: HttpRequest<methods.GET | methods.POST | methods.PUT | methods.PATCH>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
       return next.handle(request);
     }

}
