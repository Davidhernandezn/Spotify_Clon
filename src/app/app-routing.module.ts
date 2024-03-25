import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  //path: '',//LOCALHOST 4200
  //component solo si son aplicaciones pequeñas
  //LazyLoading
  { 
  path:'auth',
  loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)   //Importación dinamica. con .then por ser promesa
  },
  
  /**SE REDIMENCIONA EN EL ROUTER OUTLET
   *     component: HomePageComponent, 
   */
  { 
    path:'',
    component: HomePageComponent, 
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)   //Importación dinamica. con .then por ser promesa
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
