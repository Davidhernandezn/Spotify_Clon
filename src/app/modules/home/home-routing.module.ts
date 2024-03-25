import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TracksModule } from '../tracks/tracks.module';

//LA RUTA YA SE ENCUENTRA DEFINIDA EN APP ROUTING MODULE
const routes: Routes = [
 //{ path:'', // path:':username',//pueden ser uno o mas parametros en la ruta
 // component: HomePageComponent //pagina de home
//}

//AGREGAR MODULOS QUE SE RENDERIZARAN DENTRO DE MI ROUTER OUTLET
//CADA MODULO CONTIENE SUS RUTAS Y COMPONENTES
{
  path: 'tracks',
  loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
},
{
  path: 'favorites',
  loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
},
{
  path: 'history',
  loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
