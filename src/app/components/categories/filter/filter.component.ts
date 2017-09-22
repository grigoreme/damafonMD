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
  public color: string;

  constructor(private _fb: FormBuilder, private itemService: ItemService) {}

  ngOnInit() {
    this.filterForm = new FormGroup({
      color: new FormControl(0, []),
      price: new FormControl(null, [])
    });

    this.onFilterChange.subscribe(data => {
      this.submit();
    });
  }

  get availableColors() {
    return [
      'AliceBlue',
      'Brown',
      'DarkRed',
      'Gold',
      'Grey',
      'Green',
      'Lime',
      'Purple',
      'Red',
      'Violet',
      'Wheat',
      'White',
      'WhiteSmoke',
      'Yellow',
      'YellowGreen'
    ];
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

  private submit() {
    const formValue = this.filterForm.value;
    const price = {
      value: formValue.price,
      validate: (filterValue, value) => {
        return value >= filterValue['from'] && value <= filterValue['to'];
      }
    };
    this.itemService.filter = { price };
  }
}
