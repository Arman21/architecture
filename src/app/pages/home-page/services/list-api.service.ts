import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError } from 'src/app/models/classes/errorHandling';
import { _getOptions } from 'src/app/models/types/options';
import { User } from 'src/app/models/interfaces/user';
import { API_ENDPOINTS as apis } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ListApiService extends HandleError {

  constructor(private readonly _http: HttpClient) {
    super();
  }

  getUsersList(): Observable<User[]> {
    return this._http.get<User[]>(apis.listApi, _getOptions).pipe(catchError(this.handleError));
  }

}
