import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: [
    './home.component.scss',
  ]
})

export class HomeComponent {
  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.categories;
  }

  public categories: Category[] = [];
}
