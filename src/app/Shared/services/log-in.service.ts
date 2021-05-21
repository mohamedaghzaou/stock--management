import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cpuUsage } from 'process';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap,map } from 'rxjs/operators';
import { Employee } from '../Models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
   EmployeeSubject = new BehaviorSubject<Employee>(null);

  constructor(private http:HttpClient) { }  
  baseUrl ="http://localhost:8098";



  public get currentEmployee(): Employee {
    return this.EmployeeSubject.value;
}
  LogIn(logindata): Observable<any>{
    //this.Employee.next()
    return this.http.post<any>(this.baseUrl + '/login',logindata,{observe : "response"}).pipe(map(data=>{
      const E = new Employee();
      E.name = data.body.username;
      E.password = data.body.password;
      E.role = data.body.authorities[0].authority
      E.token = data.headers.get("Authorization")
     return E;
    }),tap(data=>{
      this.EmployeeSubject.next(data)
      localStorage.setItem("currentUser" ,JSON.stringify(data))
    }))
  }

  LogOut(){
    localStorage.removeItem('currentUser');
    this.EmployeeSubject.next(null);

    //this.http.
  }

}
