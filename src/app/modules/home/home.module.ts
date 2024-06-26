import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  //IMPORTAR LOS QUE SE NECESITA
  imports: [
    //home estara asociado al home routing (rutas)
    CommonModule, //
    HomeRoutingModule,//
    SharedModule //usar cosas del share module
  ]
})
export class HomeModule { }
