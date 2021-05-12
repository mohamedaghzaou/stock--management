import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/Shared/Models/Employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  mode:string ="Ajouter" ;
  listEmployee : Employee[]
  form:FormGroup
  constructor(private fb : FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name : ['',[Validators.pattern("^[a-zA-Z]+$"),Validators.required]],
      password : ['',[Validators.minLength(8),Validators.required]],
      role :['']
    })
    this.listEmployee=[
      {id:1,name:"namedd",password:"paeekkekke",role:"admin"},
      {id:3,name:"nameaa",password:"paeekkekke",role:"admin"},
      {id:4,name:"namebb",password:"paeekkekke",role:"admin"},
      {id:5,name:"namecc",password:"paeekkekke",role:"admin"}
     ]
   }

   delete(id:number){

   }
   fill(id:number){
   this.form.patchValue(this.listEmployee[id]);
   console.log(this.listEmployee[id])
   this.mode= "Modiier"

   }
   addEmployee(){

    if(this.mode="Modiier"){
      this.mode= "Ajouter"
      this.vide();
    }else{
      this.vide();
    }
   }
   vide(){
     this.form.reset();
     if(this.mode="Modiier"){
        this.mode= "Ajouter"
     }
   }
}
