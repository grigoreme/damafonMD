import { Component } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: [
    './home.component.scss',
  ]
})

export class HomeComponent {
  constructor() { }

  public categories: Category[] = [
    new Category(
      'first',
      '1\'st Category',
      '1',
      [],
      [
        '../../../assets/images/items/01.jpg',
      ],
    ),
    new Category(
      'second',
      '2\'nd Category',
      '1',
      [],
      [
        '../../../assets/images/items/02.jpg',
      ],
    ),
    new Category(
      'third',
      '3\'rd Category',
      '1',
      [],
      [
        '../../../assets/images/items/03.jpg',
      ],
    ),
    new Category(
      'Fourd',
      '4\'rd Category',
      '1',
      [],
      [
        '../../../assets/images/items/01.jpg',
        '../../../assets/images/items/02.jpg',
        '../../../assets/images/items/03.jpg',
      ],
    )
  ];
}
