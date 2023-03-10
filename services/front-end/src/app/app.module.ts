import { SharedModule } from "./shared/shared.module";
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { registerLocaleData } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslocoRootModule } from "./transloco/transloco-root.module";
import localeEs from "@angular/common/locales/es";
import localeEn from "@angular/common/locales/en";
import { MatNativeDateModule } from "@angular/material/core";
import { MarkdownModule } from "ngx-markdown";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store";
import { LayoutModule } from "./common/layout/layout.module";
import {
  FaIconLibrary,
  FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { currencyReducer } from "./store";

registerLocaleData(localeEs, "es");
registerLocaleData(localeEn, "en");

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    MatNativeDateModule,
    MarkdownModule.forRoot(),
    StoreModule.forRoot({
      router: routerReducer,
      currencies: currencyReducer,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    LayoutModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es" }, MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCaretUp, faCaretDown, faMinusCircle, faPlusCircle);
  }
}
