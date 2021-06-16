import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { ShowtimesComponent } from './showtimes/showtimes.component';


@NgModule({
  declarations: [MovieComponent, MovieInfoComponent, ShowtimesComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
