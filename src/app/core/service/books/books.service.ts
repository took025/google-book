import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseUrl = environment.base_url + 'volumes/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    const url = this.baseUrl + '?q=quilting&maxResults=12';
    return this.http.get<any>(url);
  }

  getBook(id: string): Observable<any> {
    const url = this.baseUrl + '' + id;
    return this.http.get<any>(url);
  }
}
