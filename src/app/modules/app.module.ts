import { NgModule } from '@angular/core';
import { AppComponent } from '../components/layout/app/app.component';

import Components from './components';

import { BrowserModule } from '@angular/platform-browser';
import { AlertModule, DatepickerModule, BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'angular4-carousel';
import { SharedModule } from '../components/shared/shared.module';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDqvy0HnLRkKb75rGqfzzfbwZd1_NrRbhM',
  authDomain: 'damafonmd.firebaseapp.com',
  databaseURL: 'https://damafonmd.firebaseio.com',
  projectId: 'damafonmd',
  storageBucket: 'damafon',
  messagingSenderId: '985267096814'
};

import { ProductService } from '../services/products.service';
import { FirebaseService } from '../services/firebase.service';
import { CategoryService } from '../services/categories.service';
import { CategoryExistsGuard } from '../guards/categoryExist.guard';
import { ItemService } from '../services/items.service';
import { ItemExistsGuard } from '../guards/itemExist.guard';

const commonModules = [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  FormsModule,
  SharedModule,
  routing
];

const firebaseModules = [
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule
];

@NgModule({
  declarations: [
    AppComponent,
    ...Components.categoryComponents,
    ...Components.homeComponents,
    ...Components.layoutComponents,
    ...Components.itemsComponents,
  ],
  imports: [
    ...commonModules,
    ...firebaseModules,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule,
    SimpleNotificationsModule.forRoot(),
    IonRangeSliderModule
  ],
  providers: [
    ProductService,
    FirebaseService,
    CategoryService,
    ItemService,
    CategoryExistsGuard,
    ItemExistsGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
