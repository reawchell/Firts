import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = "http://localhost:3000/RAP"
  baseUrl2:string = "http://localhost:3000/BOSSANOVA"
  baseUrl3:string = "http://localhost:3000/POP"
  
  


  constructor(private http: HttpClient) {}
  getRAP = () => {
    return this.http.get(this.baseUrl) 
  }
  getBOSSANOVA = () => {
    return this.http.get(this.baseUrl2)
  }
  getPOP = () => {
    return this.http.get(this.baseUrl3)
  }

  deleteCantante = (id:number)=>{
    return this.http.delete(`${this.baseUrl}/${id}`)
    return this.http.delete(`${this.baseUrl2}/${id}`)
    return this.http.delete(`${this.baseUrl3}/${id}`)
  }
}
