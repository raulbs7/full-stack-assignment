import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Currency } from "src/app/shared";
import { AppState, removeCurrency } from "src/app/store";
import { GetHistoryCurrencyService } from "./services/get-history-currency.service";
import { UnsubscribeCurrencyService } from "./services/unsubscribe-currency.service";
import { History } from "src/app/shared";

@Component({
  selector: "app-subscribed-currency",
  templateUrl: "./subscribed-currency.component.html",
  styleUrls: ["./subscribed-currency.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribedCurrencyComponent implements OnInit {
  @Input() currency: Currency;
  historyNow: History;
  historyYesterday: History;

  constructor(
    private unsubscribeCurrencyService: UnsubscribeCurrencyService,
    private getHistoryCurrencyService: GetHistoryCurrencyService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getHistoryCurrency();
  }

  unsubscribeCurrency() {
    let code = this.currency._code;
    this.unsubscribeCurrencyService
      .unsubscribeCurrency(code)
      .subscribe((currency) => console.log(`[LOG] Unsubscribing ${code}`));
    this.store.dispatch(removeCurrency({ code }));
  }

  getHistoryCurrency() {
    this.getHistoryCurrencyService
      .getHistoryCurrency(this.currency._code)
      .subscribe((historyData) => {
        this.historyNow = this.getHistoryNow(historyData.data);
        this.historyYesterday = this.getHistoryYesterday(historyData.data);
      });
  }

  private getHistoryYesterday(histories: History[]): History {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const history: History = histories.find(
      (item: History) => item._date.toISOString() == yesterday.toISOString()
    );
    return history;
  }

  private getHistoryNow(histories: History[]): History {
    const history: History = histories.find(
      (item: History) => item._date.toISOString() == new Date().toISOString()
    );
    return history;
  }
}
