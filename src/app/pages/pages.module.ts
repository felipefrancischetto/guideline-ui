import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { TextFieldComponent } from './text-field/text-field.component';

import { routes } from './pages.routing';

import { SharedModule } from '../shared/shared.module';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PagesComponent,
    TextFieldComponent,
    HomeComponent,
    TypographyComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
