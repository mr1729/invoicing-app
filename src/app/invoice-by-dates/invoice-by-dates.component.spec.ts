import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceByDatesComponent } from './invoice-by-dates.component';

describe('InvoiceByDatesComponent', () => {
  let component: InvoiceByDatesComponent;
  let fixture: ComponentFixture<InvoiceByDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceByDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceByDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
