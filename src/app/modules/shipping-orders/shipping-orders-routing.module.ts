import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShippingOrdersComponent} from "./components/shipping-orders/shipping-orders.component";
import {Page404Component} from "../../components/page404/page404.component";

const routes: Routes = [
  {
    path: '', component: ShippingOrdersComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingOrdersRoutingModule {
}
