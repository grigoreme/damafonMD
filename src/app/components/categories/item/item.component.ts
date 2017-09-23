import { Component, Input } from '@angular/core';
import { Item } from '../../../models/item';

@Component({
    selector: 'app-category-item',
    templateUrl: 'item.component.html',
    styleUrls: [
        './item.component.scss'
    ]
})

export class CategoryItemComponent  {
    @Input('item') item: Item;
    constructor() { }

    get name() {
        return this.item.Name;
    }

    get images() {
        return this.item.Images;
    }

    get price() {
        return this.item.price;
    }

    get sale() {
        return this.item.sale;
    }

    get currency() {
        return this.item.currency;
    }

    get description() {
        return this.item.description;
    }

    get Id() {
        return this.item.Id;
    }
}
