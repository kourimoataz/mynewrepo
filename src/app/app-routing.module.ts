import {AjouterComponent}from'./ajouter/ajouter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterComponent}
const routes: Routes = [
{path:'ajouter', componentAjouterComponent},
{path:}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
