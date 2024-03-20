import {Component, EventEmitter, Output} from '@angular/core';
import {ShippingOrder} from "../../interfaces/shipping-order";

@Component({
  selector: 'app-shipping-orders-list',
  standalone: true,
  imports: [],
  templateUrl: './shipping-orders-list.component.html',
  styleUrl: './shipping-orders-list.component.scss'
})
export class ShippingOrdersListComponent {
  @Output() outTemplate = new EventEmitter<string>();

  public listOrders: ShippingOrder[] = [
    {
      id: '1',
      orderNumber: 'BATA-SAN-09836',
      deadline: '01-05-24',
      state: 'waiting',
      customerId: 'BATA',
      driverId: 'CONDUCTOR 01',
      fullName: 'Paquito Lopez Ferrer',
      dni: '03847723',
      phone: '980009283',
      email: 'paquitoxx100@gmail.com',
      address: 'calle huaringas 223',
      reference: 'altura cruce con palao',
      district: 'Chorrillos',
      province: 'Lima',
      createdAt: '01-01-24',
      updatedAt: '01-01-24'
    },
    {
      id: '2',
      orderNumber: 'BATA-ZPP-00121',
      deadline: '01-05-24',
      state: 'preparing',
      customerId: 'BATA',
      driverId: 'CONDUCTOR 02',
      fullName: 'Antonia Marin Calvo',
      dni: '06667231',
      phone: '943293882',
      email: 'amcalvo@gmail.com',
      address: 'calle tambo de mora 232',
      reference: 'altura av. gaviotas 123',
      district: 'surco',
      province: 'Lima',
      createdAt: '01-01-24',
      updatedAt: '01-01-24'
    },
    {
      id: '3',
      orderNumber: 'BATA-ZLL-00422',
      deadline: '01-05-24',
      state: 'walking',
      customerId: 'BATA',
      driverId: 'CONDUCTOR 01',
      fullName: 'Antonia Marin Calvo',
      dni: '06667231',
      phone: '943293882',
      email: 'amcalvo@gmail.com',
      address: 'calle tambo de mora 232',
      reference: 'altura av. gaviotas 123',
      district: 'surco',
      province: 'Lima',
      createdAt: '01-01-24',
      updatedAt: '01-01-24'
    },
    {
      id: '4',
      orderNumber: 'BATA-TAC-00765',
      deadline: '01-05-24',
      state: 'delivered',
      customerId: 'BATA',
      driverId: 'CONDUCTOR 04',
      fullName: 'Antonia Marin Calvo',
      dni: '06667231',
      phone: '943293882',
      email: 'amcalvo@gmail.com',
      address: 'calle tambo de mora 232',
      reference: 'altura av. gaviotas 123',
      district: 'surco',
      province: 'Lima',
      createdAt: '01-01-24',
      updatedAt: '01-01-24'
    },
    {
      id: '5',
      orderNumber: 'BATA-BOT-00234',
      deadline: '01-05-24',
      state: 'rejected',
      customerId: 'BATA',
      driverId: 'CONDUCTOR 02',
      fullName: 'Antonia Marin Calvo',
      dni: '06667231',
      phone: '943293882',
      email: 'amcalvo@gmail.com',
      address: 'calle tambo de mora 232',
      reference: 'altura av. gaviotas 123',
      district: 'surco',
      province: 'Lima',
      createdAt: '01-01-24',
      updatedAt: '01-01-24'
    }
  ];

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }
}
