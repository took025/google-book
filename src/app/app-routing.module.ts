import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m =>  m.HomeModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorities/favorities.module').then(m =>  m.FavoritiesModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then(m =>  m.DetailModule)
  },
  {
    path: '**',
    loadChildren: './pages/page-not-found/page-not-found.module#PageNottFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
