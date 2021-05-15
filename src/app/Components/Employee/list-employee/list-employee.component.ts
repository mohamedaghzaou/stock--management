import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/Shared/Models/Employee.model';
import { EmployeeService } from 'src/app/Shared/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  mode:string ="Add" ;
  listEmployee : Employee[]
  form:FormGroup
  employeeEdit : Employee = new Employee();
  constructor(private fb : FormBuilder,private Employeeservice:EmployeeService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name : ['',[Validators.pattern("^[a-zA-Z]+$"),Validators.required]],
      password : ['',[Validators.minLength(8),Validators.required]],
      role :['']
    })

    
   this.getAllEmployee();
   }
   getAllEmployee(){
     this.Employeeservice.getIEmployees().subscribe(re=>{
      this.listEmployee=re;
    })
   }
   delete(id:number){
     this.Employeeservice.deleteIEmployee(id).subscribe(data=>{
      this.getAllEmployee();
         })
   }
   fill(id:number){
   this.form.patchValue(this.listEmployee[id]);
   this.mode= "Edit"
   this.employeeEdit.id = this.listEmployee[id].id;

   }
   addEmployee(){
    if(this.mode==="Add"){
      this.mode= "Add"
          this.Employeeservice.addEmployee(this.form.value).subscribe(data=>{
            this.getAllEmployee();

      })
      this.vide();
    }else{  
      this.mode= "Add"
      this.employeeEdit.name =this.form.controls["name"].value;
      this.employeeEdit.password =this.form.controls["password"].value;
      this.employeeEdit.role =this.form.controls["role"].value;
      console.log(this.employeeEdit)
      this.Employeeservice.updateEmployee(this.employeeEdit).subscribe(data=>{
      this.getAllEmployee();
   })
      this.vide();
    }
   }
   vide(){
     this.form.reset();
     if(this.mode="Edit"){
        this.mode= "Add"
     }
   }
}
