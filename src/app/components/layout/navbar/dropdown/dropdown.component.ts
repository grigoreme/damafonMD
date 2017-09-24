import { Category } from './../../../../models/category';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class NavbarDropdownComponent {
  constructor() { }

  @Input() category: Category;

  get subcategories() {
    return this.category.Subcategories;
  }

  get name() {
    return this.category.Name;
  }

  get route() {
    return this.category.Route;
  }
}
