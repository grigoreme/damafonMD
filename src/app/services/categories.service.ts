import { Category } from './../models/category';
import { Injectable } from '@angular/core';

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

  updateActiveCategory(route: string, subCatRoute?: string) {
    if (!subCatRoute) {
      this._activeCategory = this._categories[route];
    } else {
      const activeCat: Category = this._categories[route];
      const activeSubcat: Category = activeCat.Subcategories.filter(item => item.Route === subCatRoute)[0];

      this._activeCategory = activeSubcat;
    }
  }

  set category(category: Category) {
    this._categories[category.Route] = category;
  }

  get category() {
    return this._categories[this._activeCategory.Name];
  }

  get categories(): Category[] {
    return Object.keys(this._categories).map(key => {
      return this._categories[key];
    });
  }

  haveCategory(route: string): boolean {
    return !!this._categories[route];
  }

  haveSubcategory(route: string): boolean {
    if (!this.activeCategory.Subcategories) {
      return false;
    }
    const subCat = this.activeCategory.Subcategories;

    return !!subCat.filter(item => item.Route === route)[0];
  }

  getCategory(route: string) {
    const cat = this._categories[route];

    return cat;
  }

  getSubcategory(catRoute: string, subCatRoute: string): Category {
    const cat = this._categories[catRoute];

    return cat.Subcategories.filter(item => item.Route === subCatRoute)[0];
  }

  private loadCategories() {
    this.category = new Category(
      'acm',
      'Accesorii Barbati',
      '1',
      [
        new Category(
          'acm_chei',
          'Chei',
          '1_1',
          [],
          ['../../../assets/images/items/01.jpg']
        ),
        new Category(
          'acmi',
          'Inele',
          '1_2',
          [],
          ['../../../assets/images/items/01.jpg']
        ),
        new Category(
          'acmc',
          'Cipuri',
          '1_3',
          [],
          ['../../../assets/images/items/01.jpg']
        ),
        new Category(
          'acms',
          'Stickere',
          '1_4',
          [],
          ['../../../assets/images/items/01.jpg']
        )
      ],
      ['../../../assets/images/items/01.jpg']
    );
    this.category = new Category(
      'acw',
      'Accesorii Femei',
      '2',
      [
        new Category(
          'acw_chei',
          'Chei',
          '2_1',
          [],
          ['../../../assets/images/items/01.jpg']
        ),
        new Category(
          'acwu',
          'Unghii',
          '2_2',
          [],
          ['../../../assets/images/items/01.jpg']
        ),
        new Category(
          'acwc',
          'Cipuri',
          '2_3',
          [],
          ['../../../assets/images/items/01.jpg']
        ),
        new Category(
          'acws',
          'Stickere',
          '2_4',
          [],
          ['../../../assets/images/items/01.jpg']
        )
      ],
      ['../../../assets/images/items/02.jpg']
    );
    this.category = new Category(
      'acc',
      'Accesorii Copii',
      '3',
      [
        new Category(
          'accb',
          'Bratari',
          '3_1',
          [],
          ['../../../assets/images/items/01.jpg']
        ),
        new Category(
          'accc',
          'Chipuri',
          '3_2',
          [],
          ['../../../assets/images/items/01.jpg']
        ),
        new Category(
          'accs',
          'Stickere',
          '3_3',
          [],
          ['../../../assets/images/items/01.jpg']
        )
      ],
      ['../../../assets/images/items/03.jpg']
    );
    this.category = new Category(
      'ser',
      'Servicii',
      '4',
      [
        new Category(
          'cc',
          'Schimbare chip',
          '1_1',
          [],
          ['../../../assets/images/items/01.jpg']
        ),
        new Category(
          'contact',
          'Contact',
          '1_2',
          [],
          ['../../../assets/images/items/01.jpg']
        )
      ],
      ['../../../assets/images/items/01.jpg']
    );
  }
}
