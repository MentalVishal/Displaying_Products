import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: any; // Input property to receive product data
  @Output() cardClick: EventEmitter<number> = new EventEmitter<number>(); // Output event for card click

  onCardClick(): void {
    this.cardClick.emit(this.product.id);
  }
}
