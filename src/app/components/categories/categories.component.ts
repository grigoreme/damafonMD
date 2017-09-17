import { Component } from '@angular/core';
import { CategoryService } from '../../services/categories.service';
import { ItemService } from '../../services/items.service';
import { Item } from '../../models/item';

@Component({
    selector: 'app-categories',
    templateUrl: 'categories.component.html',
    styleUrls: [
        './categories.component.scss'
    ]
})

export class CategoriesComponent {
    private _items: Item[];
    constructor(private categoryService: CategoryService, private itemService: ItemService) {
        this.fetchItems();
    }

    private fetchItems() {
        const category = this.categoryService.activeCategory;
        this._items = this.itemService.getItems(category.Route);
    }

    get items() {
        return this._items;
    }

    get haveItems(): boolean {
        return !!this._items.length;
    }

}
