import {Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {Page404Component} from "./components/page404/page404.component";
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

export const routes: Routes = [
  {
    path: 'dashboard',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    component: DashboardComponent
  },
  {
    path: 'auth',
    ...canActivate(() => redirectLoggedInTo(['/dashboard'])),
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shippingOrders',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    loadChildren: () => import('./modules/shipping-orders/shipping-orders.module').then(m => m.ShippingOrdersModule)
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: '**', component: Page404Component
  }
];
