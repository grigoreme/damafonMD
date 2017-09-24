import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { CategoryService } from '../services/categories.service';
import { NotificationsService } from 'angular2-notifications';
import { ItemService } from '../services/items.service';

@Injectable()
export class SubCategoryExistsGuard implements CanActivate {
  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService,
    private router: Router,
    private notification: NotificationsService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const check = result => {
      if (!result) {
        this.notification.error(
          'Something went wrong',
          'Looks like category you are looking for doesn\'t exist'
        );
        this.router.navigate(['']);
        return;
      }
    };

    const urlParams = state.url.split('/');
    const cat = urlParams[2];
    const subCat = urlParams[3];
    const catExists = this.categoryService.haveCategory(cat);
    check(catExists);
    this.categoryService.updateActiveCategory(cat);
    const subcatExists = this.categoryService.haveSubcategory(subCat);
    check(subcatExists);
    this.categoryService.updateActiveCategory(cat, subCat);
    this.itemService.route = this.categoryService.getSubcategory(cat, subCat).Route;
    return true;
  }
}
