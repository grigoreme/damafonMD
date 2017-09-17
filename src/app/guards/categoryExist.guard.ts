import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CategoryService } from '../services/categories.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class CategoryExistsGuard implements CanActivate {

  constructor(private categoryService: CategoryService, private router: Router, private notification: NotificationsService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const cat = state.url.split('/')[2];
    const canRoute = this.categoryService.haveCategory(cat);
    if (!canRoute) {
      this.notification.error('Something went wrong', 'You are not authorized to enter here!');
      this.router.navigate(['']);
    }
    return true;
  }
}