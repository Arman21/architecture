import { InjectionToken } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { classModel } from '../classes/serviceClassModel';

export interface ProvidersModel {
  provide: InjectionToken<HttpInterceptor[]>,
  useClass: typeof classModel,
  multi: boolean
}
