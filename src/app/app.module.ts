import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CityComponent } from './components/city/city.component';
import { HotelbyclickPipe } from './pipe/hotelbyclick.pipe';
import { ImglargeDirective } from './derective/imglarge.directive';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    WeatherComponent,
    CityComponent,
    HotelbyclickPipe,
    ImglargeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
