import { ItemService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  private _item: Item;
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this._item = this.itemService.getActiveItem();
  }

  get name() {
    return this._item.Name;
  }

  get images() {
    return this._item.Images;
  }

  get price() {
    return this._item.price;
  }

  get sale() {
    return this._item.sale;
  }

  get currency() {
    return this._item.currency;
  }

  get description() {
    return this._item.description;
  }

  get Id() {
    return this._item.Id;
  }
}
