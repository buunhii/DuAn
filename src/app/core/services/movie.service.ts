import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  MovieResult,
  MovieShowtimes,
  HeThongRapChieu,
  HeThongRap,
} from '../models/movie';

// ng g service [service-name]
// ng g s [service-name]

@Injectable({
  // Tự động khai báo service vào trong providers
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<MovieResult[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim';

    const params = {
      maNhom: 'GP15',
    };

    return this.http.get<MovieResult[]>(url, { params });
  }

  getShowtimesMovie(movieId: string): Observable<MovieShowtimes> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim';

    const params = {
      maPhim: movieId,
    };

    return this.http.get<MovieShowtimes>(url, { params });
  }

  getParentListPCinemas(): Observable<HeThongRapChieu[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap';
    return this.http.get<HeThongRapChieu[]>(url);
  }

  getListCinemas(cinemaId: any): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong';
    const params = {
      maHeThongRap: cinemaId,
    };
    return this.http.get<any>(url, { params });
  }

  getShowTimesCinemas(PCinemaId: string): Observable<HeThongRap[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap';
    const params = {
      maHeThongRap: PCinemaId,
      maNhom: 'GP15',
    };
    return this.http.get<HeThongRap[]>(url, { params });
  }

  addMovie(movie: any) {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh';

    // Chuyển thành FormData để có thể lưu trữ dữ liệu đặc biệt như File và gửi lên server
    const formData = new FormData();

    for (let key in movie) {
      formData.append(key, movie[key]);
    }

    // return this.http.post(url, movie);
    return this.http.post(url, formData);
  }
}
