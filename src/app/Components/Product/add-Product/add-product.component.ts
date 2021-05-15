import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/Shared/Models/Category.model';
import { ProductService } from 'src/app/Shared/services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form:FormGroup;
  listCategory : Category[]=[]
  isAdedd:boolean=false;
  ErrorMessage :string;
  constructor(private fb : FormBuilder,private ProductService:ProductService,private router:Router) { }

  ngOnInit(): void {
   this.buildForm();
  }
  buildForm(){
     this.form= this.fb.group({
      name : ['',[Validators.required]],
      price : ['',[Validators.pattern("^[0-9]+(\.[0-9]+)?$"),Validators.required]],
      quantityStock : ['',[Validators.pattern("^[0-9]+$"),Validators.required]],
      description : [''],
      category : [''],
    })
    //dumy data
    this.listCategory= [{id:1,name:"C1"},
    {id:1,name:"C1"},
    {id:19,name:"C17"},
    {id:1,name:"C1"},
    {id:1,name:"C1"}]
  }

  //handle adding a new operation
  addProduct(){ 
    //prepare product for backend
   let product = this.form.value
   product.category = {id:this.form.controls["category"].value,name:""}
   this.ProductService.addProduct(product).subscribe(data=>{
       this.ConfirmationMessage();
       this.form.reset();
       this.ErrorMessage = "Produit ajouté avec succès"
  },error=>{
    this.ConfirmationMessage();
    this.ErrorMessage = "Il ya un problem dans l'ajouter"
  })
  }
  ConfirmationMessage(){
    this.isAdedd =true;
    setTimeout(()=>{this.isAdedd =false;},3000)
    
  }
}
