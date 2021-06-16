import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out.component';
import { SeatItemComponent } from './seat-item/seat-item.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { SelectedSeatComponent } from './selected-seat/selected-seat.component';

@NgModule({
  declarations: [
    SeatItemComponent,
    SeatListComponent,
    SelectedSeatComponent,
    CheckOutComponent,
  ],
  imports: [CommonModule, CheckOutRoutingModule],
})
export class CheckOutModule {}
