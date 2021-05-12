import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Category } from 'src/app/Shared/Models/Category.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form:FormGroup;
  listCategory : Category[]=[]
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      name : ['',[Validators.required]],
      Prix : ['',[Validators.pattern("^[0-9]+(\.[0-9]+)?$"),Validators.required]],
      Quantity : ['',[Validators.pattern("^[0-9]+$"),Validators.required]],
      description : [''],
      Category : [''],
    })
    this.listCategory= [{id:1,name:"C1"},
    {id:1,name:"C1"},
    {id:1,name:"C1"},
    {id:1,name:"C1"},
    {id:1,name:"C1"}]
  }
  addProduct(){
        console.log(this.form.value)
  }
}
