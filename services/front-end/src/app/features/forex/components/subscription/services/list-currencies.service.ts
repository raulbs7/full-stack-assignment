import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { handleError } from "src/app/shared";

@Injectable({
  providedIn: "root",
})
export class ListCurrenciesService {
  constructor(private http: HttpClient) {}

  getListCurrencies(): Observable<any> {
    return this.http
      .get(environment.currencyListUrl, { responseType: "text" })
      .pipe(catchError(handleError));
  }
}
