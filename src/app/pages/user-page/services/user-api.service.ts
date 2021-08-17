import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_ENDPOINTS as apis} from 'src/environments/environment';
import { HandleError } from 'src/app/models/classes/errorHandling';
import { User } from 'src/app/models/interfaces/user';
import { _getOptions } from 'src/app/models/types/options';
@Injectable({
  providedIn: 'root'
})

export class UserApiService extends HandleError {

  constructor(private readonly _http: HttpClient) {
    super();
  }

  getUserData(id: number | string): Observable<User> {
    return this._http.get<User>(apis.listApi + `/${id}`, _getOptions).pipe(catchError(this.handleError));
  }

}
