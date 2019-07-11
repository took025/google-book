import {Action} from '@ngrx/store';
import * as BookActionTypes from './book.constants';

export class GetBooks implements Action {
  readonly type = BookActionTypes.GET_BOOKS;

  constructor() {
  }
}

export class GetBooksSuccess implements Action {
  readonly type = BookActionTypes.GET_BOOKS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class ToggleFavourites implements Action {
  readonly type = BookActionTypes.TOGGLE_FAVOURITE;

  constructor(public payload: any) {

  }
}

export type All = GetBooks | ToggleFavourites;
