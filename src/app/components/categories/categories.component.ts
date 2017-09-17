import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/categories.service';
import { ItemService } from '../../services/items.service';
import { Item } from '../../models/item';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: [
    './categories.component.scss'
  ]
})

export class CategoriesComponent implements OnInit {
  private _items: Item[];
  private range = 1;
  public filterForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  constructor(
    private categoryService: CategoryService,
    private itemService: ItemService,
    private _fb: FormBuilder
  ) {
    this.fetchItems();
  }

  ngOnInit() {
    this.filterForm = new FormGroup({
      location: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      type: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      price: new FormControl('', []),
    });
  }

  filterApply(value: any, valid: boolean) {
    console.log(value);
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
