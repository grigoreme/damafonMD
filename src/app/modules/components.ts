import { ItemsComponent } from './../components/items/items.component';
import { AppComponent } from '../components/layout/app/app.component';
import { Four0FourComponent } from '../components/layout/404/404.component';
import { HomeComponent } from '../components/home/home.component';
import { HomeSliderComponent } from '../components/home/slider/slider.component';
import { FooterComponent } from '../components/layout/footer/footer.component';
import { HomeOffersComponent } from '../components/home/offers/offers.component';
import { NavbarComponent } from '../components/layout/navbar/navbar.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { CategoryItemComponent } from '../components/categories/item/item.component';
import { CategoryFilterComponent } from '../components/categories/filter/filter.component';
import { NavbarDropdownComponent } from '../components/layout/navbar/dropdown/dropdown.component';

export default {
  layoutComponents: [
    AppComponent,
    Four0FourComponent,
    NavbarComponent,
    FooterComponent,
    NavbarDropdownComponent,
  ],
  homeComponents: [
    HomeOffersComponent,
    HomeComponent,
    HomeSliderComponent,
  ],
  categoryComponents: [
    CategoriesComponent,
    CategoryItemComponent,
    CategoryFilterComponent,
  ],
  itemsComponents: [
    ItemsComponent,
  ],
};
