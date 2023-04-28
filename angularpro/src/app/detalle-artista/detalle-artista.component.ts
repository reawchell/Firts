import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AlbumsComponent } from '../pages/albums/albums.component';

@Component({
  selector: 'app-detalle-artista',
  templateUrl: './detalle-artista.component.html',
  styleUrls: ['./detalle-artista.component.css']
})
export class DetalleArtistaComponent implements OnInit{
public id!: number
constructor(private servicio: ApiService, private activatedRoute: ActivatedRoute){}
ngOnInit(): void {
  // this.activatedRoute.paramMap.subscribe(params =>(
  //   this.nombre = String(params.get("nombre"))
  // ))
  this.activatedRoute.paramMap.subscribe((data:any) =>(
    this.id = (data.params.id)  
   ))

  // 


  this.servicio.getPersonajesById(this.id).subscribe((data: any)=>{
    console.log(data)
  })
}
}
