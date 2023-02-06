import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedCurrencyComponent } from './subscribed-currency.component';

describe('SubscribedCurrencyComponent', () => {
  let component: SubscribedCurrencyComponent;
  let fixture: ComponentFixture<SubscribedCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribedCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribedCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
