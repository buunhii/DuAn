import { Component, OnInit } from '@angular/core';
declare var $: any;
// import $ from 'jquery';

@Component({
  selector: 'app-movies-coming',
  templateUrl: './movies-coming.component.html',
  styleUrls: ['./movies-coming.component.scss'],
})
export class MoviesComingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 1,
        },
      },
    });
  }
}
