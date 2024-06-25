import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesPageComponent } from './modules/favorites/pages/favorites-page/favorites-page.component';
//import { SharedModule } from "./shared/shared.module";
import { FavoritesModule } from './modules/favorites/favorites.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    //exports:[], //EXPORTA LO QUE DECLARAS
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FavoritesModule,
       // SharedModule
    ]
})
export class AppModule { }
