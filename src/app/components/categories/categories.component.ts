import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/categories.service';
import { ItemService } from '../../services/items.service';
import { Item } from '../../models/item';


@Component({
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  private items: Item[];
  public haveItems = true;

  constructor(
    private categoryService: CategoryService,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.fetchItems();

    this.itemService.filterUpdate.subscribe(data => {
       this.fetchItems();
    });
  }

  fetchItems() {
    const category = this.categoryService.activeCategory;
    this.itemService.route = category.Route;
    const items = this.itemService.getItems();
    this.haveItems = !!items.length;
    this.items = items;
  }

}
