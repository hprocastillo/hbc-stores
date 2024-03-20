import {Component} from '@angular/core';
import {ShippingOrdersListComponent} from "../shipping-orders-list/shipping-orders-list.component";
import {ShippingOrdersNewComponent} from "../shipping-orders-new/shipping-orders-new.component";
import {ShippingOrdersUpdateComponent} from "../shipping-orders-update/shipping-orders-update.component";

@Component({
  selector: 'app-shipping-orders',
  standalone: true,
  imports: [
    ShippingOrdersListComponent,
    ShippingOrdersNewComponent,
    ShippingOrdersUpdateComponent
  ],
  templateUrl: './shipping-orders.component.html',
  styleUrl: './shipping-orders.component.scss'
})
export class ShippingOrdersComponent {
  public template: string = "LIST";

  getTemplate(template: string) {
    this.template = template;
  }
}
