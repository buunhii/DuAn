import { Component, OnInit } from '@angular/core';
import { MovieResult } from '@/core/models/movie';
import { MovieService } from '@/core/services/movie.service';
@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss'],
})
export class MoviesItemComponent implements OnInit {
  movieList: MovieResult[] = [];
  movieListComing: MovieResult[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe({
      // Tự động nhảy vào next khi call API thành công
      next: (result) => {
        this.movieList = result;
        this.movieListComing = result;
        console.log(this.movieList);
        console.log(this.movieListComing);
      },
      // Tự động nhảy vào error khi call API thất bại
      error: (error) => {
        console.log(error);
      },
      // Được chạy sau callback next khi call API thành công
      complete: () => {
        console.log('DONE');
      },
    });
  }
}
