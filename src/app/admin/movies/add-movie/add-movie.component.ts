import { Component, OnInit } from '@angular/core';
import { MovieService } from '@/core/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  form: any = {
    tenPhim: 'Tom & Jerry',
    biDanh: 'tom-and-jerry',
    trailer: 'https://www.youtube.com/watch?v=kP9TfCWaQT4',
    hinhAnh: '',
    moTa: 'Tom & Jerry Battle',
    maNhom: 'GP01',
    ngayKhoiChieu: '30/04/2021', // Phải đúng định dạng dd/mm/yyyy
  };
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  handleChangeFile(evt: any) {
    const file = evt.target.files[0];

    this.form.hinhAnh = file;
  }

  handleAddMovie() {
    // Gọi API thêm phim
    console.log(this.form);
    this.movieService.addMovie(this.form).subscribe();
  }
}






