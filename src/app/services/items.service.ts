import { Injectable } from '@angular/core';
import { CategoryService } from './categories.service';
import { Item } from '../models/item';

@Injectable()
export class ItemService {
    private _items = [];

    constructor(private categoryService: CategoryService) {
        this.loadItems();
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
                9.52,
            ),
        );
    }

    getItems(categoryRoute: string) {
        return this._items.filter((item) => {
            return item.Categories.indexOf(categoryRoute) !== -1;
        });
    }
}
