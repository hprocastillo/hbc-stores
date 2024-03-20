import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-shipping-orders-new',
  standalone: true,
  imports: [],
  templateUrl: './shipping-orders-new.component.html',
  styleUrl: './shipping-orders-new.component.scss'
})
export class ShippingOrdersNewComponent {
  @Output() outTemplate = new EventEmitter<string>();

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }
}
