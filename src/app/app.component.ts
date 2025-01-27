import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Reservation} from './model/reservation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reserve-desk-app';
}
