import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
  }
  private url: string = "http://localhost:5000/product"; //del puerto del json
  public get(){
    return this.http.get(this.url);
  }
  public post(state: any){
    return this.http.post(this.url,state); //a qué se refiere con state?
  }
}
