import { ItemService } from './../services/items.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ItemExistsGuard implements CanActivate {

  constructor(private itemService: ItemService, private router: Router, private notification: NotificationsService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const itemId = state.url.split('/')[2];
    const canRoute = this.itemService.haveItem(itemId);
    if (!canRoute) {
      this.notification.error('Something went wrong', 'Looks like item you are looking for doesn\'t exist');
      this.router.navigate(['']);
      return;
    }
    this.itemService.activeItem = itemId;
    return true;
  }
}
