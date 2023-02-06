import { TestBed } from '@angular/core/testing';

import { UnsubscribeCurrencyService } from './unsubscribe-currency.service';

describe('UnsubscribeCurrencyService', () => {
  let service: UnsubscribeCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsubscribeCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
