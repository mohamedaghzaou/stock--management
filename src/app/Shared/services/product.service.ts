import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  baseUrl ="http://localhost:8098";


  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + '/list-product',{responseType:"json"})
  }

  addProduct(item): Observable<any>{
   return this.http.post(this.baseUrl + '/product/add', item,{responseType:"json"});
  }
  deleteProduct(id): Observable<any>{
   return this.http.delete(this.baseUrl + '/product/' + id , {responseType:"json"});
  }
  getByProductId(id): Observable<Product>{
      return this.http.get<Product>(this.baseUrl + '/product/' + id);
  }
  updateProduct(item): Observable<any>{
    return this.http.put(this.baseUrl + '/product/product/', item);
   }
}
