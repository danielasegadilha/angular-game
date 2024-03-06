import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand/brand.component';
import { ButtonComponent } from './button/button.component';
import { NavComponent } from './nav/nav.component';
import { LinkComponent } from './nav/link/link.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ButtonComponent,
    BrandComponent,
    NavComponent,
    LinkComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    BrandComponent,
    NavComponent,
    CommonModule,
  ]
})

export class SharedModule { }
