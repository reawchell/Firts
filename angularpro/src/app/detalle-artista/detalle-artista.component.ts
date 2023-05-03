import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AlbumsComponent } from '../pages/albums/albums.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-artista',
  templateUrl: './detalle-artista.component.html',
  styleUrls: ['./detalle-artista.component.css'],
})
export class DetalleArtistaComponent implements OnInit {
  id!: number;
  rap!: any;
  // bossa!: any
  // pop!: any
  constructor(
    private servicio: ApiService,
    private rapService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
 
    this.activatedRoute.paramMap.subscribe((data: any) => {
      console.log(data.params.id);
      this.id = data.params.id;
    });
    this.servicio.getRAP(this.id).subscribe((data: any) => {
      console.log(data);
      this.rap = data;
    });

    // this.servicio.getBOSSA(this.id).subscribe((data:any)=>{
    //   console.log(data);
    //   this.bossa = data;
    // })

    // this.servicio.getPOPI(this.id).subscribe((data:any)=>{
    //   console.log(data);
    //   this.pop = data;
    // })
  };
  
  
  deleteCantante = () => {
    this.rapService.deleteCantante(this.id).subscribe((data: any) => {
      alert('Cantante Elimidado');
      this.router.navigate(['/albums']);
    })
  }
}
