import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = "http://localhost:3000/RAP"


  constructor(private http: HttpClient) {}
  getRAP = () => {
    return this.http.get(this.baseUrl)
  }
}
