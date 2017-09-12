import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    private _produts = [];

    constructor() { }

    get products() {
        return this._produts;
    }
}
