import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { Currency, handleError } from "src/app/shared";
import { environment } from "src/environments/environment";
import { Response } from "src/app/shared";

@Injectable({
  providedIn: "root",
})
export class UnsubscribeCurrencyService {
  constructor(private http: HttpClient) {}

  unsubscribeCurrency(code: string): Observable<Response<Currency>> {
    const resourcePath = `/currency/${code}`;
    const body = { code: code };
    return this.http
      .put<Response<Currency>>(environment.apiUrl + resourcePath, body)
      .pipe(catchError(handleError));
  }
}
