import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceByHoursComponent } from './invoice-by-hours.component';

describe('InvoiceByHoursComponent', () => {
  let component: InvoiceByHoursComponent;
  let fixture: ComponentFixture<InvoiceByHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceByHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceByHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
