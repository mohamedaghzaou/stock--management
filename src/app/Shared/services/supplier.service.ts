import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../Models/Supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient) { }
  baseUrl ="http://localhost:8098";


  getSuppliers(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.baseUrl + '/Supplier/list',{responseType:"json"})
  }


  addSupplier(item): Observable<any>{
   return this.http.post(this.baseUrl + '/Supplier/add', item,{responseType:"text",observe:"body"});
  }


  deleteSupplier(id): Observable<any>{
   return this.http.delete(this.baseUrl + '/Supplier/' + id , {responseType:"text",observe:"body"});
  }


  getBySupplierId(id): Observable<Supplier>{
      return this.http.get<Supplier>(this.baseUrl + '/Supplier/' + id,{responseType:"json"});
  }
  updateSupplier(item): Observable<any>{
    return this.http.put(this.baseUrl + '/Supplier/update', item,{responseType:"text",observe:"body"});
   }
}
