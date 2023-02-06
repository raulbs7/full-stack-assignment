import { TestBed } from '@angular/core/testing';

import { ListCurrenciesService } from './list-currencies.service';

describe('ListCurrenciesService', () => {
  let service: ListCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
