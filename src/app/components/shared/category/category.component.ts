import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category';

@Component({
    selector: 'app-shop-category',
    templateUrl: 'category.component.html',
    styleUrls: [
        './category.component.scss'
    ]
})

export class CategoryComponent {
    @Input() category: Category;

    constructor() { }

    get images() {
        return this.category.Images;
    }

    get haveImages() {
        return !!this.images.length;
    }

    get name() {
        return this.category.Name;
    }

    get route() {
        return this.category.Route;
    }
}
