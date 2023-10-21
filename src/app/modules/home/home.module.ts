import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    //home estara asociado al home routing (rutas)
    CommonModule, //
    HomeRoutingModule//
  ]
})
export class HomeModule { }
