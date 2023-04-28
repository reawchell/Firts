import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalleArtistaComponent } from './detalle-artista/detalle-artista.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"albums", component: AlbumsComponent},
  {path:"formularios", component: FormulariosComponent},
  {path:"albums/:nombre", component: DetalleArtistaComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
