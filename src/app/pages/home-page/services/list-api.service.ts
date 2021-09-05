import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './../../../globalServices/state/loading.service';
import { Observable } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { HandleError } from 'src/app/models/classes/errorHandling';
import { _getOptions } from 'src/app/models/types/options';
import { User } from 'src/app/models/interfaces/user';
import { API_ENDPOINTS as apis } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ListApiService extends HandleError {
  loading$: Observable<boolean>;

  constructor(
    private readonly _http: HttpClient,
    private readonly _loadingService: LoadingService
  ) {
    super();
    this._loadingService.setLoading(true);
    this.loading$ = this._loadingService.loading$
  }

  getUsersList(): Observable<User[]> {
    return this._http.get<User[]>(apis.listApi, _getOptions).pipe(
      finalize((): void => {
        this._loadingService.setLoading(false);
      }),
      catchError(this.handleError)
    );
  }

}
