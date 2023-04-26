import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    FormulariosComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
