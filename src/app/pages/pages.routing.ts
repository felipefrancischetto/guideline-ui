import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { TypographyComponent } from './typography/typography.component';

export const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'text-field', component: TextFieldComponent },
  { path: 'typography', component: TypographyComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
