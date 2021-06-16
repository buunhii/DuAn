import { Component, OnInit } from '@angular/core';
import { MovieService } from '@/core/services/movie.service';

import {
  CumRapChieu,
  DanhSachPhim,
  HeThongRap,
  HeThongRapChieu,
  LstCumRap,
  LstLichChieuTheoPhim,
} from '@/core/models/movie';
@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss'],
})
export class CinemaListComponent implements OnInit {
  parentListCinemas: HeThongRapChieu[] = [];
  listCinemas: LstCumRap[] = [];
  MovieList: DanhSachPhim[] = [];
  MovieShowTimes: LstLichChieuTheoPhim[] = [];
  setSelectedCinema: string = '';
  selectedHomePCinema: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getParentListPCinemas().subscribe({
      next: (result) => {
        this.parentListCinemas = result;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.movieService.getShowTimesCinemas('BHDStar').subscribe({
      next: (result) => {
        this.listCinemas = result[0].lstCumRap;
        this.listSessionToday(this.listCinemas[0]);
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

  listSessionToday(Cinema: LstCumRap) {
    let ArrayMovie: any[] = [];
    Cinema.danhSachPhim.forEach((movie) => {
      if (
        movie.lstLichChieuTheoPhim.findIndex((showTime) =>
          showTime.ngayChieuGioChieu.toString().startsWith('2019-01-01')
        ) != -1
      ) {
        ArrayMovie.push(movie);
      }
    });
    this.MovieList = ArrayMovie.slice();
  }

  renderShowTimeMovieToday(movie: DanhSachPhim) {
    return movie.lstLichChieuTheoPhim.filter((showTime) =>
      showTime.ngayChieuGioChieu.toString().startsWith('2019-01-01')
    );
  }

  showCinema(PCinemaId: string) {
    this.movieService.getShowTimesCinemas(PCinemaId).subscribe({
      next: (result) => {
        this.listCinemas = result[0].lstCumRap;
        this.listSessionToday(this.listCinemas[0]);
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.selectedHomePCinema = PCinemaId;
    this.setSelectedCinema = '';
  }

  ShowTimeMovie(CinemaId: string) {
    this.setSelectedCinema = CinemaId;
    let index = this.listCinemas.findIndex(
      (cinema) => cinema.maCumRap === CinemaId
    );
    this.listSessionToday(this.listCinemas[index]);
  }
}
