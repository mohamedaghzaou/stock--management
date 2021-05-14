import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
    console.log(this.myForm);
  }


}
