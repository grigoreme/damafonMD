import { Injectable, EventEmitter } from '@angular/core';
import { CategoryService } from './categories.service';
import { Item } from '../models/item';

@Injectable()
export class ItemService {
  private _items = [];
  private _filteredItems = [];
  private _filter = {};
  private _route;
  private _maxPrice = 1;
  public filterUpdate: EventEmitter<any> = new EventEmitter();
  public routeUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private categoryService: CategoryService) {
    this.loadItems();

    this.filterUpdate.subscribe(filter => {
      this._filter = filter;
      this.updateItems();
    });

    this.routeUpdate.subscribe(route => {
      if (this._route !== route) {
        this._route = route;
        this.updateItems();
      }
    });
  }

  private loadItems() {
    this._items.push(
      new Item(
        'Cofta',
        '1',
        ['first', 'third'],
        ['../../../assets/images/items/01.jpg'],
        50,
        'USD',
        'Very usual and very low cost!',
        9.52
      )
    );
  }
  set filter(filter) {
    this.filterUpdate.next(filter);
  }

  set route(route: string) {
    this.routeUpdate.next(route);
  }

  get maxPrice() {
    return this._maxPrice;
  }

  private updateItems() {
    const userFilter = item => {
      let valid = true;
      const _filter = this._filter;
      Object.keys(_filter).forEach(key => {
        if (!item.hasOwnProperty(key)) {
          return;
        }
        let value = item[key];
        if (key === 'price' && item.hasOwnProperty('sale')) {
          value -= item.sale;
        }
        const filterItem = _filter[key];
        if (!filterItem.validate(filterItem.value, value)) {
          valid = false;
        }
      });
      return valid;
    };

    const routeFilter = item => {
      if (item.price > maxPrice) {
        maxPrice = item.price;
      }
      return item.Categories.indexOf(this._route) !== -1;
    };

    let maxPrice = 0;
    this._filteredItems = this._items.filter(routeFilter).filter(userFilter);
    this._maxPrice = maxPrice;
  }

  getItems() {
    return this._filteredItems;
  }
}
