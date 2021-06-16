import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MovieService } from '@/core/services/movie.service';
import { MovieResult } from '@/core/models/movie';
declare var $: any;

@Component({
  selector: 'app-movies-showing',
  templateUrl: './movies-showing.component.html',
  styleUrls: ['./movies-showing.component.scss'],
})
export class MoviesShowingComponent implements OnInit, AfterViewInit {
  movieList: MovieResult[] = [];

  // Phải khai báo service bên trong constructor mới có thể sử dụng
  constructor(private movieService: MovieService) {}
  //constructor() {}
  // lifecycle của angular tương đương componentDidMount, chạy 1 lần sau khi render
  ngOnInit(): void {
    // Promise để lấy kết quả ta .then.catch hoặc sử dụng async await
    // Đối với Observable ta sẽ .subscribe
    this.movieService.getMovieList().subscribe({
      // Tự động nhảy vào next khi call API thành công
      next: (result) => {
        this.movieList = result;
        console.log(this.movieList);
      },
      //Tự động nhảy vào error khi call API thất bại
      error: (error) => {
        console.log(error);
      },
      //Được chạy sau callback next khi call API thành công
      complete: () => {
        console.log('DONE');
      },
    });
  }
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }
}
