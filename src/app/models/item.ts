'use strict';

import { Category } from './category';

export class Item {
  constructor(
    public Name?: string,
    public Id?: string,
    public Categories?: string[],
    public Images?: string[],
    public price?: number,
    public currency?: string,
    public description?: String,
    public sale?: number
  ) { }
}
