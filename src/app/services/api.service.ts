import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoApple } from '../model/apple';
import { ListadoCisco } from '../model/cisco';
import { ListadogoPro } from '../model/gopro';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:String = "https://marketplaces-bdi.herokuapp.com/";


  constructor(private http:HttpClient) { }
  
  getAllApple():Observable<ListadoApple[]>{
    let direccion = this.url + "apple";
    return this.http.get<ListadoApple[]>(direccion);   
  }

  getAllCisco():Observable<ListadoCisco[]>{
    let direccion = this.url + "cisco";
    return this.http.get<ListadoCisco[]>(direccion);
  }
  
  getAllgoPro():Observable<ListadogoPro[]>{
    let direccion = this.url + "gopro";
    return this.http.get<ListadoCisco[]>(direccion);
  }

} 
