import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"libros", component: LibrosComponent},
  {path:"formulario", component: FormulariosComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
