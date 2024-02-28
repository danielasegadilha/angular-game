import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand/brand.component';
import { ButtonComponent } from './button/button.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    ButtonComponent,
    BrandComponent,
    NavComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    BrandComponent,
    NavComponent,
    CommonModule,
  ]
})

export class SharedModule { }
