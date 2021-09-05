import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  private _setLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this._setLoading$.asObservable();

  constructor() {

  }

  setLoading(state: boolean): void {
    this._setLoading$.next(state);
  }

}
