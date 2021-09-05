import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './../../../globalServices/state/loading.service';
import { Observable } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { API_ENDPOINTS as apis} from 'src/environments/environment';
import { HandleError } from 'src/app/models/classes/errorHandling';
import { User } from 'src/app/models/interfaces/user';
import { _getOptions } from 'src/app/models/types/options';
@Injectable({
  providedIn: 'root'
})

export class UserApiService extends HandleError {
  loading$: Observable<boolean>;

  constructor(
      private readonly _http: HttpClient,
      private readonly _loadingService: LoadingService
    ) {
    super();
    this._loadingService.setLoading(true);
    this.loading$ = this._loadingService.loading$;
  }

  getUserData(id: number | string): Observable<User> {
    return this._http.get<User>(apis.listApi + `/${id}`, _getOptions).pipe(
      finalize((): void => {
        this._loadingService.setLoading(false);
      }),
      catchError(this.handleError)
    );
  }
}
