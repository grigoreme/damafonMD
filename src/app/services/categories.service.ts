import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
    private _activeCategory: Category;
    private _categories: Object = {};

    constructor() { }

    get activeCategory() {
        return this._activeCategory;
    }

    set activeCategory(category: Category) {
        this._categories[category.Name] = category;
    }

    set category(category: Category) {
        this._categories[category.Name] = category;
    }

    get category() {
        return this._categories[this._activeCategory.Name];
    }
}
