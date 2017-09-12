'use strict';

export class Category {
  constructor(
    public Route: string,
    public Name: string,
    public Id: string,
    public Subcategories?: Category[],
    public Images?: string[],
  ) { }
}
