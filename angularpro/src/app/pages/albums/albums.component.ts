
import { Component } from "@angular/core";
import { Cantantes } from "src/app/interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  id!: number;
  albums!: any;
  listaRap: Cantantes []= [];
  listaBosaNova: Cantantes [] = [];
  listaPop: Cantantes [] = [];

constructor(private rapService: ApiService, private bossaService: ApiService, private popService: ApiService){}


ngOnInit() :void {
  this.rapService.getRAP().subscribe((data:any)=>{
    console.log(data);

    this.listaRap= [...data]
  })
  
  this.bossaService.getBOSSANOVA().subscribe((data1:any)=>{
  console.log(data1)
  this.listaBosaNova= [...data1]
})

this.popService.getPOP().subscribe((data2:any)=>{
  console.log(data2)
  this.listaPop= [...data2]
});
// this.rapService.getRAP(this.id).subscribe
// ((data:any)=>{

// })

}
deleteCantante =()=>{
  this.rapService.deleteCantante(this.id).subscribe
  ((data:any)=>{
    alert("Cantante Elimidado")
  })
}
}
