import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    //home estara asociado al home routing (rutas)
    CommonModule, //
    HomeRoutingModule//
  ]
})
export class HomeModule { }
