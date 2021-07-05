import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SuprimerComponent } from './suprimer/suprimer.component';
import { AfficherComponent } from './afficher/afficher.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterComponent,
    SuprimerComponent,
    AfficherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
