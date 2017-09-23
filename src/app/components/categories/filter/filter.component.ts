import { ItemService } from './../../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  public filterForm: FormGroup;
  public _colors: object = {
    Brown: { color: 'Brown', enabled: false },
    DarkRed: { color: 'DarkRed', enabled: false },
    Grey: { color: 'Grey', enabled: false },
    Green: { color: 'Green', enabled: false },
    Lime: { color: 'Lime', enabled: false }
  };

  constructor(private _fb: FormBuilder, private itemService: ItemService) {}

  ngOnInit() {
    this.filterForm = new FormGroup({
      color: new FormControl([], []),
      price: new FormControl(null, [])
    });

    this.onFilterChange.subscribe(data => {
      this.submit();
    });

    this.updatePrice({from: 0, to: 10000});
  }

  get availableColors() {
    // Convert to array
    return Object.keys(this._colors).map(key => {
      return this._colors[key];
    });
  }

  updatePrice(value: any) {
    this.filterForm.controls.price.setValue(
      { from: value.from, to: value.to },
      { eventEmit: true }
    );
  }

  get onFilterChange() {
    return this.filterForm.valueChanges.debounceTime(300);
  }

  updateColor(color) {
    this._colors[color].enabled = !this._colors[color].enabled;
    this.filterForm.controls.color.setValue(
      this.availableColors.filter(item => item.enabled).map(item => item.color),
      { eventEmit: true },
    );
  }

  private submit() {
    const formValue = this.filterForm.value;
    const price = {
      value: formValue.price,
      validate: (filterValue, itemValue) => {
        return itemValue >= filterValue['from'] && itemValue <= filterValue['to'];
      }
    };
    const color = {
      value: formValue.color,
      validate: (filterValue, itemValue) => {
        if (!filterValue.length) {
          return true;
        }
        const upperFilter = filterValue.map(item => item.toUpperCase());
        const upperItem = itemValue.toUpperCase();
        return upperFilter.indexOf(upperItem) !== -1;
      }
    };

    this.itemService.filter = { color, price };
  }
}
