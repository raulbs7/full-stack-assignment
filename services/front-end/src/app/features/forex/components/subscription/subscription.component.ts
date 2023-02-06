import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Currency, readCsv } from "src/app/shared";
import { addCurrency, AppState } from "src/app/store";
import { ListCurrenciesService } from "./services/list-currencies.service";
import { SubscriptionService } from "./services/subscription.service";

const CURRENCIES = [];
@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.scss"],
})
export class SubscriptionComponent implements OnInit {
  myControl = new FormControl();
  options: string[];
  filteredOptions: string[];

  constructor(
    private listCurrenciesService: ListCurrenciesService,
    private subscriptionService: SubscriptionService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.filterCurrencyInput();
    this.getCurrencyOptions();
  }

  getCurrencyOptions() {
    this.listCurrenciesService.getListCurrencies().subscribe({
      next: (data) => {
        this.options = readCsv(data, 0);
        this.filteredOptions = this.options;
      },
      error: (error) => console.log(error),
    });
  }

  subscribeCurrency() {
    let currency: Currency;
    console.log(this.myControl.value.toUpperCase());
    this.subscriptionService
      .subscribeCurrency(this.myControl.value.toUpperCase())
      .subscribe((currencyData) => {
        console.log(`[LOG] Subscribing ${currencyData.data._code}`);
        currency = currencyData.data;
        this.store.dispatch(addCurrency({ currency }));
      });
  }

  filterCurrencyInput() {
    this.myControl.valueChanges.subscribe((newValue) => {
      this.filteredOptions = this._filter(newValue);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
