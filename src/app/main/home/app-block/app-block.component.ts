import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-app-block',
  templateUrl: './app-block.component.html',
  styleUrls: ['./app-block.component.scss'],
})
export class AppBlockComponent implements OnInit {
  constructor() {}
  mobileSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  ngOnInit(): void {}
}
