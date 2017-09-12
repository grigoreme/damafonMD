'use strict';

import { Category } from './category';

export class Item {
  constructor(
    public Name?: string,
    public Id?: string,
    public Subcategories?: Category[],
    public Images?: string[],
    public price?: number,
  ) { }
}
