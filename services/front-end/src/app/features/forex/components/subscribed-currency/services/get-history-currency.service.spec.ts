import { TestBed } from '@angular/core/testing';

import { GetHistoryCurrencyService } from './get-history-currency.service';

describe('GetHistoryCurrencyService', () => {
  let service: GetHistoryCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHistoryCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
