import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMethods as methods } from './methods';

export class classModel implements HttpInterceptor {

  intercept(
    request: HttpRequest<methods.GET | methods.POST | methods.PUT | methods.PATCH>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
       return next.handle(request);
     }

}
