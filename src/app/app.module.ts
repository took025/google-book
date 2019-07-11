import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import {BookReducer} from './store/books/book.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from './store/books/book.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({books: BookReducer}),
    EffectsModule.forRoot([BookEffects])
  ],
  exports: [
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
