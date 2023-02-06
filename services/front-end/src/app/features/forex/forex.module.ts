import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./../../shared/angular-material/angular-material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForexLandingPageComponent } from "./pages/forex-landing-page/forex-landing-page.component";
import { TRANSLOCO_SCOPE, TranslocoModule } from "@ngneat/transloco";
import { RouterModule } from "@angular/router";
import { routes } from "./forex.routing";
import { SubscriptionComponent } from "./components";
import { SubscribedCurrencyComponent } from "./components/subscribed-currency/subscribed-currency.component";

export const loader = ["en", "es"].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/forex.${lang}.json`);
  return acc;
}, {});

@NgModule({
  declarations: [
    ForexLandingPageComponent,
    SubscriptionComponent,
    SubscribedCurrencyComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslocoModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: "forex",
        loader,
      },
    },
  ],
})
export class ForexModule {}
