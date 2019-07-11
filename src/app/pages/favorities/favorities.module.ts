import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritiesRoutingModule } from './favorities-routing.module';
import { FavoritiesComponent } from './favorities/favorities.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ FavoritiesComponent],
  imports: [
    CommonModule,
    FavoritiesRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class FavoritiesModule { }
