import { Routes } from '@angular/router';
import {MyReservationsComponent} from './my-reservations/my-reservations.component';
import {ReservationDetailComponent} from './reservation-detail/reservation-detail.component';
import {NewReservationComponent} from './new-reservation/new-reservation.component';

export const routes: Routes = [
  {path:"", component: MyReservationsComponent},
  {path:"reservation-detail/:id", component: ReservationDetailComponent},
  {path:"new-reservation", component: NewReservationComponent}
];
