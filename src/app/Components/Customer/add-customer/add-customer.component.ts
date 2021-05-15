import { CustomerService } from './../../../Shared/services/customer.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  ngOnInit(): void {
   this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      firstname:['',[Validators.required]],
      lastname :['',[Validators.required]],
      city :['',[Validators.required]],
      email :['',[Validators.email,Validators.required]],
      phone : ['',[Validators.required]],
      address : ['',[Validators.required]]
    })
  }


  submit(){
    this.customerService.addItem(this.myForm.value).subscribe(
      res=>{
        // this.myForm.reset(this.myForm.value);
        this.myForm.reset();

      },
      err => {
        console.log("error  : "+err);
      }
    )
  }

}
