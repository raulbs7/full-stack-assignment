import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AngularMaterialModule],
})
export class SharedModule {}
