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
  form: any;
  Router: any;
constructor(private servicio:ApiService,private formu:FormBuilder){}
public nuevoAlbum = this.servicio.albumInfo;
public albumId = this.servicio.albumInfo.id;
ngOnIt():void{
  this.albumsForm =  this.form.group({
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
this.servicio.postRAP, this.servicio.postBOSSA, this.servicio.postPOPI(this.nuevoAlbum).subscribe();
this.servicio.cleanAlbum();
if(this.albumId ! == ''){
  this.servicio.putAlbum(this.albumId, this.nuevoAlbum).subscribe();
  alert("Album Editado")
  this.Router.navigate(["/albums"])
}

else{this.servicio.postRAP, this.servicio.postBOSSA, this.servicio.postPOPI(this.nuevoAlbum).subscribe();
  alert("Album Nuevo Añadido")
  this.Router.navigate(["/albums"])
}
this.albumsForm.reset();
}

}
