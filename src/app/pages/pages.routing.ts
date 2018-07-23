import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'text-field', loadChildren: './text-field/text-field.module#TextFieldModule' },
      { path: 'typography', loadChildren: './typography/typography.module#TypographyModule'},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
