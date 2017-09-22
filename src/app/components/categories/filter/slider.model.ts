'use strict';

export class Slider {
  public min: number;
  public max: number;
  public from: number;
  public from_percent: number;
  public from_value: number;
  public to: number;
  public to_percent: number;
  public to_value: number;
  constructor(obj) {
    Object.assign(this, obj);
  }
}

