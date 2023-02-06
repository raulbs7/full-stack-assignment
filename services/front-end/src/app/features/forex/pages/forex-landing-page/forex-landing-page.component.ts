import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Currency } from "src/app/shared";
import { addCurrency, AppState, getCurrencyList } from "src/app/store";
import { GetSubscribedCurrencyService } from "./services/get-subscribed-currency.service";

@Component({
  selector: "app-forex-landing-page",
  templateUrl: "./forex-landing-page.component.html",
  styleUrls: ["./forex-landing-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForexLandingPageComponent implements OnInit {
  constructor(
    private getSubscribedCurrencyService: GetSubscribedCurrencyService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getSubscribedCurrency();
  }

  currencies$: Observable<ReadonlyArray<Currency>> =
    this.store.select("currencies");

  getSubscribedCurrency() {
    this.getSubscribedCurrencyService
      .getSubscribedCurrency()
      .subscribe((currenciesData) => {
        let currencies = currenciesData.data;
        this.store.dispatch(getCurrencyList({ currencies }));
      });
  }
}
