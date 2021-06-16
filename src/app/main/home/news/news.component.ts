import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  loaiTinTuc: string = 'DienAnh';
  constructor() {}
  ChonLoaiTin(value: any) {
    this.loaiTinTuc = value;
  }
  ngOnInit(): void {}
}
