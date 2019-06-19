import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgMarqueeModule } from "ng-marquee-improved";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgMarqueeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
