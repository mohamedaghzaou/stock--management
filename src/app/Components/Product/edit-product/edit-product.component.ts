import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Shared/Models/Category.model';
import { Product } from 'src/app/Shared/Models/Products.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form:FormGroup;
  listCategory : Category[]=[]
  product:Product={name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:3,name:"mmm"}};
  constructor(private fb:FormBuilder,private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      name : [this.product.name,[Validators.required]],
      price : [this.product.price,[Validators.pattern("^[0-9]+(\.[0-9]+)?$"),Validators.required]],
      quantityStock : [this.product.quantityStock,[Validators.pattern("^[0-9]+$"),Validators.required]],
      description : [this.product.description],
      Category : [this.product.category.id],
    })
    this.listCategory= [{id:1,name:"C1"},
    {id:9,name:"C777"},
    {id:5,name:"C"},
    {id:3,name:"C3"},
    {id:7,name:"C4"}]
    //let id = +this.activeRoute.snapshot.queryParams['id'];
   // this.getProduct(id)
    let id = 3
    this.product.id = id;
  }


  getProduct(id:number){

  }
  updateProduct(){

  }
  cancel(){
      this.router.navigate(["/home/products"])
  }
  }

