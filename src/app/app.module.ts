import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

import { routes } from './pages/pages.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
