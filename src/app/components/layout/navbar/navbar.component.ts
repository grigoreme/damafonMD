import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private _categories: Category[];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this._categories = this.categoryService.categories;
  }

  get categories() {
    return this._categories;
  }
}
