import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs/index';
import {BooksService} from '../../../core/service/books/books.service';
import {Action, select, Store} from '@ngrx/store';
import * as BookActionTypes from '../../../store/books/book.constants';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-favorities',
  templateUrl: './favorities.component.html',
  styleUrls: ['./favorities.component.sass']
})
export class FavoritiesComponent implements OnInit, OnDestroy {

  booksState$: Observable<any>;
  booksSubscription: Subscription;
  booksList: any[];
  isFaborited = true;

  constructor(private booksService: BooksService, private store: Store<any>) {
  }

  ngOnInit() {
    this.booksState$ = this.store.pipe(select('books'));

    this.booksSubscription = this.booksState$.pipe(map(data => {
      this.booksList = data.books.filter(x => x.isFavourite);
    })).subscribe();
  }

  toggleFavourite(data) {
    const toggleFavouriteAction: any = {
      type: BookActionTypes.TOGGLE_FAVOURITE,
      payload: {
        id: data
      }
    };
    this.store.dispatch(toggleFavouriteAction);
    this.isFaborited = !this.isFaborited;
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
