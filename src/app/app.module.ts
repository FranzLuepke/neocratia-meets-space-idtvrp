import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './core/ng-material.module';
import { RoutingRedirectGuard } from './core/routing-redirect.guard';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    NgMaterialModule,
    PagesModule,
    FormsModule
  ],
  // entryComponents: [RoutingRedirectGuard],
  providers: [RoutingRedirectGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
