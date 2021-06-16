import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-news',
  templateUrl: './item-news.component.html',
  styleUrls: ['./item-news.component.scss'],
})
export class ItemNewsComponent implements OnInit {
  @Input() Tin: any;
  constructor() {}

  ngOnInit(): void {}
}
