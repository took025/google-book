import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DomsanitarizerPipe } from './pipes/domsanitarizer/domsanitarizer.pipe';

@NgModule({
  declarations: [
    ItemComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    FooterComponent,
    DomsanitarizerPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    ItemComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    DomsanitarizerPipe
  ]
})
export class SharedModule { }
