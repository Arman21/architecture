import { ProvidersModel } from '../models/interfaces/providersModel';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptorService } from '../globalServices/Interceptors/headersInterceptor.service';
import { ErrorHandlingInterceptorService } from '../globalServices/Interceptors/error-handling-interceptor.service';
import { AuthInterceptorService } from '../globalServices/Interceptors/auth-interceptor.service';

export const headersInterceptorProvider: ProvidersModel = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeadersInterceptorService,
  multi: true
}

export const errorHandlingInterceptorProvider: ProvidersModel = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorHandlingInterceptorService,
  multi: true
}

export const authenticationInterceptorProvider: ProvidersModel = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
}
