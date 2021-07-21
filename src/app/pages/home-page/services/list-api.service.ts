import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError } from 'src/app/models/errorHandling';
import { _options } from 'src/app/models/options';
import { User } from 'src/app/models/user';
import { APIs as apis } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ListApiService extends HandleError {

  constructor(private readonly _http: HttpClient) {
    super();
  }

  getUsersList(): Observable<User[]> {
    return this._http.get<User[]>(apis[0], _options).pipe(catchError(this.handleError));
  }

}
