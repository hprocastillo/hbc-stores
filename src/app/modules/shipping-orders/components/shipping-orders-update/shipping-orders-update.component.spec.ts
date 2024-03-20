import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOrdersUpdateComponent } from './shipping-orders-update.component';

describe('ShippingOrdersUpdateComponent', () => {
  let component: ShippingOrdersUpdateComponent;
  let fixture: ComponentFixture<ShippingOrdersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingOrdersUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingOrdersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
