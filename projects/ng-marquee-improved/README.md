# ng-marquee-improved

Angular 7/8 CSS-based Scrolling Marquee (e.g. stock/news ticker, scrolling marquee)

[originally forked from [https://github.com/shivarajnaidu/ng-marquee](https://github.com/shivarajnaidu/ng-marquee) to address this [issue](https://github.com/shivarajnaidu/ng-marquee/issues/2)]

## How to:

### Install using npm/yarn

```bash
   npm install ng-marquee-improved --save
   # OR
   yarn add ng-marquee-improved
```

### Simple Example

#### Import Module

```ts
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
```

#### Component Usage

```html
<ng-marquee>
  <mark>Hello, World....</mark>
</ng-marquee>
```

## API

### Input Properties

###

`marqueeId` property should be a unique string across all instances of ng-marquee in the DOM

`duration` property available for controlling speed of text movement
(default value is 25 in seconds)

```html
<ng-marquee duration="30" marqueeId="qwerty123">
  <mark>Hello, World....</mark>
</ng-marquee>
```
