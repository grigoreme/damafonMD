import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, DatepickerModule, BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FirebaseService } from '../services/firebase.service';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CategoriesComponent } from '../components/categories/categories.component';
import { CategoryItemComponent } from '../components/categories/item/item.component';
import { CategoryService } from '../services/categories.service';
import { CategoryExistsGuard } from '../guards/categoryExist.guard';
import { ItemService } from '../services/items.service';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';

export const firebaseConfig = {
  apiKey: 'AIzaSyDqvy0HnLRkKb75rGqfzzfbwZd1_NrRbhM',
  authDomain: 'damafonmd.firebaseapp.com',
  databaseURL: 'https://damafonmd.firebaseio.com',
  projectId: 'damafonmd',
  storageBucket: 'damafon',
  messagingSenderId: '985267096814'
};

@NgModule({
  declarations: [
    AppComponent,
    Four0FourComponent,
    HomeComponent,
    HomeSliderComponent,
    NavbarComponent,
    FooterComponent,
    HomeOffersComponent,
    CategoriesComponent,
    CategoryItemComponent,
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IonRangeSliderModule,
  ],
  providers: [
    ProductService,
    FirebaseService,
    CategoryService,
    CategoryExistsGuard,
    ItemService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
