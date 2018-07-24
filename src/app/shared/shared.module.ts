import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { routes } from '../pages/pages.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    InputComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
