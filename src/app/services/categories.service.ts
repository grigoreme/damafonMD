import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Router, NavigationStart, ActivatedRoute, Data, ParamMap } from '@angular/router';

@Injectable()
export class CategoryService {
  private _activeCategory: Category;
  private _categories: Object = {};

  constructor() {
    this.loadCategories();
  }

  get activeCategory() {
    return this._activeCategory;
  }

  set activeCategory(category: Category) {
    this._activeCategory = category;
  }

  set category(category: Category) {
    this._categories[category.Route] = category;
  }

  get category() {
    return this._categories[this._activeCategory.Name];
  }

  get categories(): Category[] {
    return Object.keys(this._categories).map((key) => {
      return this._categories[key];
    });
  }

  haveCategory(route: string): boolean {
    return !!this._categories[route];
  }

  private loadCategories() {
    this.category = new Category(
      'first',
      '1\'st Category',
      '1',
      [],
      [
        '../../../assets/images/items/01.jpg',
      ],
    );
    this.category = new Category(
      'second',
      '2\'nd Category',
      '1',
      [],
      [
        '../../../assets/images/items/02.jpg',
      ],
    );
    this.category = new Category(
      'third',
      '3\'rd Category',
      '1',
      [],
      [
        '../../../assets/images/items/03.jpg',
      ],
    );
    this.category = new Category(
      'fouth',
      '4\'th Category',
      '1',
      [],
      [
        '../../../assets/images/items/01.jpg',
      ],
    );
  }
}
