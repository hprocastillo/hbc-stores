import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOrdersNewComponent } from './shipping-orders-new.component';

describe('ShippingOrdersNewComponent', () => {
  let component: ShippingOrdersNewComponent;
  let fixture: ComponentFixture<ShippingOrdersNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingOrdersNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingOrdersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
