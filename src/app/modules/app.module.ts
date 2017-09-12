import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, DatepickerModule, BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from '../components/layout/app/app.component';
import { Four0FourComponent } from '../components/layout/404/404.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductService } from '../services/products.service';
import { HomeSliderComponent } from '../components/home/slider/slider.component';
import { CarouselModule } from 'angular4-carousel';
import { SharedModule } from '../components/shared/shared.module';
import { NavbarComponent } from '../components/layout/navbar/navbar.component';
import { FooterComponent } from '../components/layout/footer/footer.component';
import { HomeOffersComponent } from '../components/home/offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    Four0FourComponent,
    HomeComponent,
    HomeSliderComponent,
    NavbarComponent,
    FooterComponent,
    HomeOffersComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    routing,
    CarouselModule,
    SharedModule,
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
