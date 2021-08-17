import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export abstract class HandleError {

  protected handleError = (error: HttpErrorResponse): Observable<never> => {
    if (error.status === 0) console.log(`A client-side(Browser) error occured: => ${error.message}`);
    else console.log(`Server returned an error: Status ${error.status} : message => ${error.statusText}.`);
    return throwError(`Sorry dear user, something was wrong, please try again later!`);
  }

}
