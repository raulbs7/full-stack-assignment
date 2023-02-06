import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { handleError, History } from "src/app/shared";
import { environment } from "src/environments/environment";
import { Response } from "src/app/shared";

@Injectable({
  providedIn: "root",
})
export class GetHistoryCurrencyService {
  constructor(private http: HttpClient) {}

  getHistoryCurrency(code: string): Observable<Response<History[]>> {
    const resourcePath = `/currency/${code}/history`;
    return this.http
      .get<Response<History[]>>(environment.apiUrl + resourcePath)
      .pipe(catchError(handleError));
  }
}
