import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritiesComponent } from './favorities/favorities.component';

const routes: Routes = [
  {
    path:'',
    component: FavoritiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritiesRoutingModule { }
