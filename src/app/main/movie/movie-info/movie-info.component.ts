import { MovieShowtimes } from '@/core/models/movie';

import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  @Input() movieShowTimes: MovieShowtimes;
  constructor() {
    this.movieShowTimes = <MovieShowtimes>{};
  }
  ngOnInit(): void {}
}
