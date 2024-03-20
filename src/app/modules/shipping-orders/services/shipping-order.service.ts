import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  Firestore, orderBy,
  query,
  updateDoc
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Timestamp} from "firebase/firestore";
import {ShippingOrder} from "../interfaces/shipping-order";

@Injectable({
  providedIn: 'root'
})
export class ShippingOrderService {
  shippingOrdersCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.shippingOrdersCollection = collection(this.firestore, 'shippingOrders');
  }

  getShippingOrders() {
    const q = query(this.shippingOrdersCollection, orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<ShippingOrder[]>;
  }

  getShippingOrderById(id: string) {
    const ref = doc(this.firestore, `shippingOrders/${id}`);
    return docData(ref, {idField: 'id'});
  }

  addShippingOrder(shippingOrder: ShippingOrder) {
    return addDoc(this.shippingOrdersCollection, shippingOrder);
  }

  updateShippingOrder(shippingOrder: ShippingOrder) {
    const ref = doc(this.firestore, `shippingOrders/${shippingOrder.id}`);
    return updateDoc(ref, {...shippingOrder});
  }

  deleteShippingOrder(shippingOrder: ShippingOrder) {
    const ref = doc(this.firestore, `shippingOrders/${shippingOrder.id}`);
    return deleteDoc(ref);
  }

  /** GET BIRTHDAY METHODS **/

  getDateFromInput(data: any) {
    let date = new Date(data.value);
    let day: string;
    let month: string;
    let year: string;

    /** get Day **/
    if (date.getDate() < 9) {
      day = '0' + (date.getDate() + 1);
    } else {
      day = (date.getDate() + 1).toString();
    }

    /** get Month **/
    if (date.getMonth() < 9) {
      month = '0' + (date.getMonth() + 1);
    } else {
      month = (date.getMonth() + 1).toString();
    }

    /** get Year **/
    year = date.getFullYear().toString();
    return new Date(year + '-' + month + '-' + day + 'T00:00:00');
  }

  setDateToInput(data: Timestamp) {
    let day: string;
    let month: string;
    let year: string;

    /** get day **/
    if (data.toDate().getDate() < 9) {
      day = '0' + data.toDate().getDate().toString();
    } else {
      day = data.toDate().getDate().toString();
    }

    /** get month **/
    if (data.toDate().getMonth() < 9) {
      month = '0' + (data.toDate().getMonth() + 1).toString();
    } else {
      month = (data.toDate().getMonth() + 1).toString();
    }

    /** get year **/
    year = data.toDate().getFullYear().toString();

    return year + '-' + month + '-' + day;
  }
}
