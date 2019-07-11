import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() data: any;
  @Input() isFaborited: boolean;
  seeMore = false;
  favorite = "favorite this book"
  unfavorite = " unfavorite this book"

  @Output() toggleFavourite: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  showMore() {
    this.seeMore = !this.seeMore;
  }

  btnClicked(data) {
    this.toggleFavourite.emit(data);
    this.isFaborited = !this.isFaborited;
  }
}
