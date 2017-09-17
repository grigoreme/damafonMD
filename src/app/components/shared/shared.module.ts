import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';
import { NoDataComponent } from './no-data/no-data.component';

const declarations = [
    CategoryComponent,
    NoDataComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [...declarations],
    declarations: [...declarations],
})
export class SharedModule { }
