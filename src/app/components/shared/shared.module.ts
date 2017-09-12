import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';

const declarations = [
    CategoryComponent,
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
