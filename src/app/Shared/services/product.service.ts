import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../Models/Category.model';
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
   return this.http.post(this.baseUrl + '/product/add', item,{responseType:"text"});
  }
  deleteProduct(id): Observable<any>{
   return this.http.delete(this.baseUrl + '/product/' + id , {responseType:"text",observe:"body"});
  }
  getByProductId(id:number): Observable<any>{
      return this.http.get<any>(this.baseUrl + '/product/category/' + id,{responseType:"json"}).pipe(map(data=>{
        for(let p of  data.products){
          if(p.id===id){
            const product =new Product()
            const category =new Category()
            category.id =data.id;
            category.name =data.name;
            product.id =p.id;
            product.name =p.name;
            product.description =p.description;
            product.image =p.image;
            product.price =p.price;
            product.quantityStock =p.quantityStock;
            product.category =category;
               return product;
          }
        }
      }));
  }
  
  updateProduct(item): Observable<any>{
    return this.http.put(this.baseUrl + '/product/update/', item);
   }
}
