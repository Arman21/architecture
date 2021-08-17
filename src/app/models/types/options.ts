import { HttpHeaders, HttpParams, HttpContext } from "@angular/common/http";
import { User } from '../interfaces/user';

type GetOptions<T> = {
  headers?: HttpHeaders | { [header: string]: string | string[] },
  context?: HttpContext,
  observe?: 'body',
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
  reportProgress?: boolean,
  responseType?: 'json',
  withCredentials?: boolean
};

export const _getOptions: GetOptions<User[]> = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  }),
  observe: 'body' as const,
  responseType: 'json' as const
}
