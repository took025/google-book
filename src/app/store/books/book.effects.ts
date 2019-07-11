import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {GetBooksSuccess} from './book.action';
import * as BookActionTypes from './book.constants';
import {environment} from '../../../environments/environment';

@Injectable()
export class BookEffects {
  private baseUrl = environment.base_url + 'volumes/';

  constructor(private http: HttpClient, private actions$: Actions) {
  }

  @Effect()
  GetBooks$: Observable<any> = this.actions$.pipe(
    ofType(BookActionTypes.GET_BOOKS),
    mergeMap(action => {
        const url = this.baseUrl + '?q=quilting&maxResults=12';

        return this.http.get(url).pipe(
          map((data: any) => {
            // console.log('books call', data);
            return data ? new GetBooksSuccess(data.items) : new GetBooksSuccess([]);
          }),
          catchError(error => {
            console.log('error occured', error);
            return error;
          })
        );
      }
    )
  );
}
