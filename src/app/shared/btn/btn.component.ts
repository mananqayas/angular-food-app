import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css',
})
export class BtnComponent {
  quantity: number = 0;
  addToCart() {
    this.quantity = 1;
  }
  increaseQuantity() {
    this.quantity += 1;
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    } else {
      this.quantity = 0;
    }
  }

  isItemInCart(): boolean {
    return this.quantity > 0;
  }
}
