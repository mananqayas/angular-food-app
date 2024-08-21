import { Component, computed, Input, signal } from '@angular/core';
import { BtnComponent } from '../shared/btn/btn.component';
import { desserts } from '../../desserts';

const randomIndex = Math.floor(Math.random() * desserts.length);

@Component({
  selector: 'app-desert',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './desert.component.html',
  styleUrl: './desert.component.css',
})
export class DesertComponent {
  @Input({ required: true }) dessert!: {
    id: number;
    url: string;
    category: string;
    title: string;
    price: string;
  };

  imagePath = computed(() => '/assets/' + this.dessert.url);
}
