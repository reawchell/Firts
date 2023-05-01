import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cantantes } from '../interface';
import { AlbumsComponent } from '../pages/albums/albums.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getPersonajesById(id: number) {
    throw new Error('Method not implemented.');
  }
  baseUrl:string = "http://localhost:3000/RAP"
  baseUrl2:string = "http://localhost:3000/BOSSANOVA"
  baseUrl3:string = "http://localhost:3000/POP"
  
  


  constructor(private http: HttpClient) {}

   public albumInfo = {
    id: "",
    nombre: "",
    edad: "",
    origen: "",
    src: "",
    alt: ""
  }

  getRAPs = () => {
    return this.http.get(this.baseUrl) ;
  }
  getRAP = (id:number)=>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  postRAP = (album:any)=> {
    return this.http.post(this.baseUrl, album);

  }


  getBOSSANOVA = () => {
    return this.http.get(this.baseUrl2);
  }
  getBOSSA = (id:number)=>{
    return this.http.get(`${this.baseUrl2}/${id}`);
  }
  postBOSSA = (album:any)=> {
    return this.http.post(this.baseUrl2, album);

  }

  getPOP = () => {
    return this.http.get(this.baseUrl3);
  }
  getPOPI = (id:number)=>{
    return this.http.get(`${this.baseUrl3}/${id}`);
  }
  postPOPI = (album:any)=> {
    return this.http.post(this.baseUrl3, album);

  }


  deleteCantante = (id:number)=>{
    return this.http.delete(`${this.baseUrl}/${id}`);
    return this.http.delete(`${this.baseUrl2}/${id}`);
    return this.http.delete(`${this.baseUrl3}/${id}`);
  }
  editarItem = (albums:any)=> {
    this.albumInfo = albums;
  }
  cleanAlbum = ()=>{
    this.albumInfo = {
      id: "",
      nombre: "",
      edad: "",
      origen: "",
      src: "",
      alt: ""

    };
  }
  putAlbum = (albumId:any,editedAlbum:any)=>{
    return this.http.put(`${this.baseUrl}/${albumId}`, editedAlbum)
    return this.http.put(`${this.baseUrl2}/${albumId}`, editedAlbum)
    return this.http.put(`${this.baseUrl3}/${albumId}`, editedAlbum)

  }
}
