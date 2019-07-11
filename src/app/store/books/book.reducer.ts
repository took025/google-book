import {initializeState} from './book.state';
import * as BookActions from './book.constants';

const initialState = initializeState();

export function BookReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case BookActions.GET_BOOKS:
      return {...state, load: true};
    case BookActions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        load: false
      };
    case BookActions.TOGGLE_FAVOURITE:
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id === action.payload.id) {
            book.isFavourite = !book.isFavourite;
          }
          return book;
        })
      };
    default:
      return state;
  }
}
