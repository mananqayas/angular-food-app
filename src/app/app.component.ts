import { Component } from '@angular/core';
import { BtnComponent } from './shared/btn/btn.component';
import { DesertComponent } from './desert/desert.component';
import { desserts } from '../desserts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BtnComponent, DesertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allDesserts = desserts;
}
