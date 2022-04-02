import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from'@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = "http://localhost:8080/api/products";


  constructor(private http : HttpClient) { }

  getProducts(): Observable<Product[]>{
    debugger;
    let headers = new HttpHeaders();
    //headers = headers.append('Authorization', 'Basic cnJhcGlrb2xhQGFvbC5jb206cGFzc3dvcmQ=');

    return this.http.get<Product[]>(`${this.baseUrl}`)
  }
  addProduct(product:Product):Observable<Object>{

    return this.http.post(`${this.baseUrl}`,product);
  }

  getProductById(id:number):Observable<Product>{

    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }


  updateProduct(id:number,product:Product):Observable<Object>{

   return this.http.put(`${this.baseUrl}/${id}`,product)
  }



}
