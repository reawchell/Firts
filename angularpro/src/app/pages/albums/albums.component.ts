
import { Component } from "@angular/core";
import { Cantantes } from "src/app/interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  listaRap: Cantantes []= []
constructor(private rapService: ApiService){}

ngOnInit() :void {
  this.rapService.getRAP().subscribe((data:any)=>{
    console.log(data);

  })
}
}
