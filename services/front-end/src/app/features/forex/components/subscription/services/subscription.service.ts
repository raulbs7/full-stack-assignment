import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { handleError, Currency } from "src/app/shared";
import { environment } from "src/environments/environment";
import { Response } from "src/app/shared";

@Injectable({
  providedIn: "root",
})
export class SubscriptionService {
  constructor(private http: HttpClient) {}

  subscribeCurrency(code: string): Observable<Response<Currency>> {
    const resourcePath = `/currency`;
    const body = { code: code };
    return this.http
      .post<Response<Currency>>(environment.apiUrl + resourcePath, body, {
        responseType: "json",
      })
      .pipe(catchError(handleError));
  }
}
