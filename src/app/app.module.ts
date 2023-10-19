import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [//Declaraciones, componentes, pipes
    AppComponent
  ],
  imports: [//solo importar otros modulos
    BrowserModule,
    AppRoutingModule
  ],

  //exports:[], //EXPORTA LO QUE DECLARAS

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
