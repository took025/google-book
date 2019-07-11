import {Component, OnInit, OnDestroy, Output} from '@angular/core';
import {BooksService} from 'src/app/core/service/books/books.service';
import {Subscription, Observable} from 'rxjs';
import {Store, select, Action} from '@ngrx/store';
import * as BookActionTypes from '../../../store/books/book.constants';
import {BookReducer} from '../../../store/books/book.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  booksState$: Observable<any>;
  booksSubscription: Subscription;
  booksList: any[];
  @Output() load = true;

  constructor(private booksService: BooksService, private store: Store<any>) {
  }

  ngOnInit() {
    this.booksState$ = this.store.pipe(select('books'));
    const getBooksAction: Action = {
      type: BookActionTypes.GET_BOOKS
    };

    this.booksSubscription = this.booksState$.pipe(map(data => {
      // console.log(data.books, 'books');
      this.booksList = data.books;
      this.load = data.load;
    })).subscribe();
    this.store.dispatch(getBooksAction);
  }

  toggleFavourite(data) {
    const toggleFavouriteAction: any = {
      type: BookActionTypes.TOGGLE_FAVOURITE,
      payload: {
        id: data
      }
    };
    this.store.dispatch(toggleFavouriteAction);
    // console.log(data, 'data');
    this.load = false;
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
