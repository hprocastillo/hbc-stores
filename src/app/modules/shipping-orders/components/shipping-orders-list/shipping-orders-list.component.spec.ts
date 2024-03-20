import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOrdersListComponent } from './shipping-orders-list.component';

describe('ShippingOrdersListComponent', () => {
  let component: ShippingOrdersListComponent;
  let fixture: ComponentFixture<ShippingOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingOrdersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
