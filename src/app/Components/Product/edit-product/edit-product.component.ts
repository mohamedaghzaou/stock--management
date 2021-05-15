import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Shared/Models/Category.model';
import { ProductService } from 'src/app/Shared/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form:FormGroup;
  listCategory : Category[]=[]
  id :number;
  isAdedd: boolean=false;
  ErrorMessage:string
  constructor(private fb:FormBuilder,private activeRoute:ActivatedRoute,
    private router:Router ,
    private ProductService:ProductService) { }

  ngOnInit(): void {
     this.id = +this.activeRoute.snapshot.paramMap.get("id")
    this.getProduct(this.id)    
    this.form= this.fb.group({
      name : ['',[Validators.required]],
      price : ['',[Validators.pattern("^[0-9]+(\.[0-9]+)?$"),Validators.required]],
      quantityStock : ['',[Validators.pattern("^[0-9]+$"),Validators.required]],
      description : [''],
      category : [''],
    })
    this.listCategory= [{id:1,name:"C1"},
    {id:19,name:"C777"},
    {id:5,name:"C"},
    {id:3,name:"C3"},
    {id:7,name:"C4"}]
   
  }
  getProduct(id:number){
    this.ProductService.getByProductId(id).subscribe(data=>{
     this.form.patchValue(data);
     this.form.controls["category"].setValue(data.category.id)
    })
  }
  updateProduct(){

    let product = this.form.value
    product.id=this.id;
   product.category = {id:this.form.controls["category"].value,name:""}
   this.ProductService.updateProduct(product).subscribe(data=>{
    this. ConfirmationMessage();
    this.ErrorMessage="produit modifier avec ssucces"
   },error=>{
    this. ConfirmationMessage();
    this.ErrorMessage="un problem dans  modification"
   })
  }
  cancel(){
      this.router.navigate(["/home/products"])
  }
  ConfirmationMessage(){
    this.isAdedd =true;
    setTimeout(()=>{this.isAdedd =false;},3000)
  }

  }

