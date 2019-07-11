import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNottFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNottFoundRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class PageNottFoundModule { }
