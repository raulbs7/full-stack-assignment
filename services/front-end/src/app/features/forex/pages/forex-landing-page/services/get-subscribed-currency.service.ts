import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { Currency, handleError } from "src/app/shared";
import { environment } from "src/environments/environment";
import { Response } from "src/app/shared";

@Injectable({
  providedIn: "root",
})
export class GetSubscribedCurrencyService {
  constructor(private http: HttpClient) {}

  getSubscribedCurrency(): Observable<Response<Currency[]>> {
    const resourcePath = `/currencies`;
    return this.http
      .get<Response<Currency[]>>(environment.apiUrl + resourcePath)
      .pipe(catchError(handleError));
  }
}
