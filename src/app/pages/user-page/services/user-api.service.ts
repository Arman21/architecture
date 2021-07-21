import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APIs as apis} from 'src/environments/environment';
import { HandleError } from 'src/app/models/errorHandling';
import { User } from 'src/app/models/user';
import { _options } from 'src/app/models/options';

@Injectable({
  providedIn: 'root'
})

export class UserApiService extends HandleError {

  constructor(private readonly _http: HttpClient) {
    super();
  }

  getUserData(id: number | string): Observable<User> {
    return this._http.get<User>(apis[0] + `/${id}`, _options).pipe(catchError(this.handleError));
  }

}
