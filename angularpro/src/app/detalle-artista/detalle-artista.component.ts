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
id!: number
rap! :any
bossa!: any
pop!: any
constructor(private servicio: ApiService, private activatedRoute: ActivatedRoute){}


ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((data:any) =>{
    console.log(data.params.id);
     this.id = (data.params.id)  
})
this.servicio.getRAP(this.id).subscribe((data:any)=>{
  console.log(data);
  this.rap = data;
})


this.servicio.getBOSSA(this.id).subscribe((data:any)=>{
  console.log(data);
  this.bossa = data;
})

this.servicio.getPOPI(this.id).subscribe((data:any)=>{
  console.log(data);
  this.pop = data;
})
} 
 
}


