import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MoviesShowingComponent } from './movies-showing/movies-showing.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { NewsComponent } from './news/news.component';
import { MoviesComingComponent } from './movies-coming/movies-coming.component';
import { MoviesBlockComponent } from './movies-block/movies-block.component';
import { MoviesItemComponent } from './movies-item/movies-item.component';
import { ShowNewsComponent } from './show-news/show-news.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { ShowPromotionComponent } from './show-promotion/show-promotion.component';
import { ItemNewsComponent } from './item-news/item-news.component';
import { AppBlockComponent } from './app-block/app-block.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    MoviesShowingComponent,
    CinemaListComponent,
    NewsComponent,
    MoviesComingComponent,
    MoviesBlockComponent,
    MoviesItemComponent,
    ShowNewsComponent,
    ShowReviewComponent,
    ShowPromotionComponent,
    ItemNewsComponent,
    AppBlockComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SlickCarouselModule],
})
export class HomeModule {}
