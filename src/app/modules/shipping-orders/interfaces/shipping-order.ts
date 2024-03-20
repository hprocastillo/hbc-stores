export interface ShippingOrder {
  id: string;
  orderNumber: string;
  deadline: string;
  state: string;//waiting, preparing, walking, delivered, rejected

  customerId: string;
  driverId: string;

  fullName: string;
  dni: string;
  phone: string;
  email: string;
  address: string;
  reference: string;
  district: string;
  province: string;

  createdAt: string;
  updatedAt: string;
}
