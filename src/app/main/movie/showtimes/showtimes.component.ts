import { MovieShowtimes, CumRapChieu } from '@/core/models/movie';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.scss'],
})
export class ShowtimesComponent implements OnInit {
  @Input() cinemaShowTimes: CumRapChieu;
  @Input() movieShowTimes: MovieShowtimes;

  @Output() handleChangeShowTimeByParent = new EventEmitter<string>();
  @Output() handleChangeShowTimeByDate = new EventEmitter<string>();
  selectParentCinema: string = '';
  selectDay: string = '';
  dayShowList: any = [
    { thu: 'Thứ 3', ngayChieu: '01', maNgayChieu: '2019-01-01' },
    { thu: 'Thứ 4', ngayChieu: '02', maNgayChieu: '2019-01-02' },
    { thu: 'Thứ 5', ngayChieu: '03', maNgayChieu: '2019-01-03' },
    { thu: 'Thứ 6', ngayChieu: '04', maNgayChieu: '2019-01-04' },
    { thu: 'Thứ 7', ngayChieu: '05', maNgayChieu: '2019-01-05' },
    { thu: 'Chủ Nhật', ngayChieu: '06', maNgayChieu: '2019-01-06' },
    { thu: 'Thứ 2', ngayChieu: '07', maNgayChieu: '2019-01-07' },
  ];
  constructor() {
    this.cinemaShowTimes = <CumRapChieu>{};
    this.movieShowTimes = <MovieShowtimes>{};
  }

  ngOnInit(): void {}
  transferParentCinema(PcinemaID: string) {
    this.handleChangeShowTimeByParent.emit(PcinemaID);
    this.selectParentCinema = PcinemaID;
  }
  transferDay(Day: string) {
    this.handleChangeShowTimeByDate.emit(Day);
    this.selectDay = Day;
  }
}
