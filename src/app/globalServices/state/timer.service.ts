import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TimerService {

  constructor() {

  }

  setInterval(): Observable<number> {
    const interval$: Observable<number> = interval(1000);
    const time$: Observable<number> = interval$.pipe(take(1));
    return time$;
  }

}
