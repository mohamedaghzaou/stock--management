import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/Shared/Models/Supplier.model';
@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})

export class EditSupplierComponent implements OnInit {
  supplier:Supplier;
  constructor(private fb : FormBuilder,private activeRoute:ActivatedRoute) { }
  form:FormGroup;
  errorMessage:string="";
  ngOnInit(): void {
     this.form= this.fb.group({
      firstname : [this.supplier.firstname,[Validators.pattern("^[a-zA-Z]+$"),Validators.required]],
      lastname : [this.supplier.lastname,[Validators.pattern("^[a-zA-Z]+$"),Validators.required]],
      email : [this.supplier.email,[Validators.email,Validators.required]],
      phone : [this.supplier.phone,[Validators.pattern('^[0-9]{10}$'),Validators.required]],
      address: [this.supplier.phone,Validators.required],
    })
    let id = +this.activeRoute.snapshot.queryParams['id'];
    this.supplier.id = id;
    this.getsupplier(id);
  }
  updatesupplier(){
      this.errorMessage = "";
    if(this.form.invalid){
      if(this.form.controls["firstname"].invalid){
        this.errorMessage+= "Prenom, ";
      }
      if(this.form.controls["lastname"].invalid){
        this.errorMessage += "Nom, ";
      }
      if(this.form.controls["email"].invalid){
        this.errorMessage += "E-mail, ";
      }
      if(this.form.controls["phone"].invalid){
        this.errorMessage += "Teli, ";
      }
      if(this.form.controls["address"].invalid){
        this.errorMessage += "address, ";
      }
      this.errorMessage += " est invalid";
    }
  }

  getsupplier(id:number){
      //this.form.patchValue()
  }
  cancel(){
  }

}