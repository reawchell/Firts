import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {
albumsForm!: FormGroup;  
 
constructor(private servicio:ApiService,private formu:FormBuilder, private router:Router){}
public nuevoAlbum = this.servicio.albumInfo;
public albumId = this.servicio.albumInfo.id;
ngOnInit():void{
  this.albumsForm =  this.formu.group({
    id: [
      this.nuevoAlbum.id, [Validators.required]
    ],
    nombre: [
      this.nuevoAlbum.nombre, [Validators.required]
    ],
    edad: [
      this.nuevoAlbum.edad
    ],
    origen: [
      this.nuevoAlbum.origen
    ],
    src: [
      this.nuevoAlbum.src
    ],
    alt: [
      this.nuevoAlbum.alt
    ],
  });
  this.albumsForm.valueChanges.subscribe((changes)=>{
    // console.log(changes)
    this.nuevoAlbum = changes

  });
}
onSubmit = () => { 
// this.servicio.postRAP(this.nuevoAlbum).subscribe();
this.servicio.cleanAlbum();
if(this.albumId !== ''){
  this.servicio.putAlbum(this.albumId, this.nuevoAlbum).subscribe();
  alert("Album Editado")
  this.router.navigate(["/albums"])
  this.servicio.cleanAlbum();
}


else{
  this.servicio.postRAP(this.nuevoAlbum).subscribe();
  alert("Album Nuevo Añadido")
  this.router.navigate(["/albums"])
}
this.albumsForm.reset();
}

}
