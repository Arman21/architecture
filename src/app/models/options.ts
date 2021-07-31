import { HttpHeaders, HttpParams, HttpContext } from "@angular/common/http";
import { User } from './user';

type Options<T> = {
  headers?: HttpHeaders | { [header: string]: string | string[] } | undefined,
  observe?: "body",
  context?: HttpContext | undefined,
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> } | undefined,
  reportProgress?: boolean | undefined,
  responseType?: "json" | undefined,
  withCredentials?: boolean | undefined
};

export const _options: Options<User[]> = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  }),
  observe: 'body' as const,
  responseType: 'json' as const
}
