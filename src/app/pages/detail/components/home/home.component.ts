import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/core/service/books/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  loadign = true;
  data = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.booksService.getBook(id).subscribe((res: any) => {
      this.data = { ...res };
      this.loadign = false;
    });
  }
}
