import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of as observableOf } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ISobres } from 'src/app/interfaces/isobres';
import { SOBRE_CONST } from './sobre.const';

@Injectable()
export class SobreService {
  private urlConst = SOBRE_CONST.URLS;
  private envConst = SOBRE_CONST.ENV;

  constructor(private http: HttpClient) {}

  getSobres(): Observable<ISobres[]> {
    const env = this.getEnvironment();

    return this.http.get<ISobres[]>(this.urlConst[env].SOBRES)
      .pipe(catchError(this.handleError('getSobres', [])));
  }

  //#region Private Functions

  /**
   * Gets name of the environment where the app is ran.
   */
  private getEnvironment(): string {
    const env = (environment.production) ? this.envConst.PROD : this.envConst.DV;

    return env;
  }

  /**
   * Show us the errors in the console,dev purpose only.
   */
private handleError(operationName: string, result: any) {
    return ((error: HttpErrorResponse) => {
      console.error('Error with ' + operationName);
      console.error('Type of error ' + error.message);
      return observableOf(result);
    });
  }

  //#endregion Private Functions
}
