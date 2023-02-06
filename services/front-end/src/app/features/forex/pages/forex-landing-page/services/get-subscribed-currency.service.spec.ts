import { TestBed } from "@angular/core/testing";

import { GetSubscribedCurrencyService } from "./get-subscribed-currency.service";

describe("GetSubscribedCurrencyService", () => {
  let service: GetSubscribedCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSubscribedCurrencyService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
