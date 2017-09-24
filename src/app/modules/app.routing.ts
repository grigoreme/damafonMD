import { ItemsComponent } from './../components/items/items.component';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../components/layout/app/app.component';
import { Four0FourComponent } from '../components/layout/404/404.component';
import { HomeComponent } from '../components/home/home.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { CategoryExistsGuard } from '../guards/categoryExist.guard';
import { ItemExistsGuard } from '../guards/itemExist.guard';
import { SubCategoryExistsGuard } from '../guards/subcategoryExist.guard';

const routes: Routes = <Routes>[
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'cat/:cat',
    component: CategoriesComponent,
    pathMatch: 'full',
    canActivate: [CategoryExistsGuard]
  },
  {
    path: 'subcat/:cat/:subcat',
    component: CategoriesComponent,
    pathMatch: 'full',
    canActivate: [SubCategoryExistsGuard],
  },
  {
    path: 'items/:item',
    component: ItemsComponent,
    pathMatch: 'full',
    canActivate: [ItemExistsGuard]
  },
  {
    path: '**',
    component: Four0FourComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
