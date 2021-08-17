import { InjectionToken } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { useClassModel } from '../classes/useClassModel';

export interface ProvidersModel {
  provide: InjectionToken<HttpInterceptor[]>,
  useClass: typeof useClassModel,
  multi: boolean
}
