import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  //path: '',//LOCALHOST 4200
  //component solo si son aplicaciones pequeñas
  //LazyLoading
  path:'',
  loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)   //Importación dinamica. con .then por ser promesa

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
