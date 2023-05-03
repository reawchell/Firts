
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cantantes } from "src/app/interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  id!: number;
  album!: any;
  listaRap: any []= [];
  // listaBosaNova: Cantantes [] = [];
  // listaPop: Cantantes [] = [];

constructor(private rapService: ApiService,private miraMiId: ActivatedRoute, private router: Router){}


ngOnInit() :void {
  this.miraMiId.paramMap.subscribe((data:any)=>{
    console.log(data.params.id)
    this.id = data.params.id
  })
  this.rapService.getRAPs().subscribe((data:any)=>{
    console.log(data);

    this.listaRap= [...data]
  })
  
//   this.bossaService.getBOSSANOVA().subscribe((data1:any)=>{
//   console.log(data1)
//   this.listaBosaNova= [...data1]
// })

// this.popService.getPOP().subscribe((data2:any)=>{
//   console.log(data2)
//   this.listaPop= [...data2]
// });

}
// deleteCantante =()=>{
//   this.rapService.deleteCantante(this.id).subscribe
//   ((data:any)=>{
//     alert("Cantante Elimidado")
//     this.router.navigate(["/albums"])
//   })
// }
editarCantante = (albums:any)=>{
  this.rapService.editarItem(albums), 
  // this.bossaService.editarItem,
  //  this.popService.editarItem(albums);
   this.router.navigate(["/formularios"])
}
}
