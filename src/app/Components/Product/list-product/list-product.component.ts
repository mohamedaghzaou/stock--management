import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Shared/Models/Products.model';
import { ProductService } from 'src/app/Shared/services/product.service';
import { SupplierService } from 'src/app/Shared/services/supplier.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ListProductComponent implements OnInit {
  Supplying : boolean= false  ;
  listProduct: Product[]=[];
  listSupplier=[];
  p: number;
  filter:string = "";
  myForm : FormGroup;
  constructor(private router:Router , private ProductService:ProductService,
    private supplierService : SupplierService,
    private fb : FormBuilder
    ) { }
  ngOnInit(): void {
    this.getAllProcut();
    this.createForm();
  }

  getAllProcut(){
     this.ProductService.getProducts().subscribe(data=>{
       this.listProduct = data
     })
  }

  delete(idProduct:number){
    this.ProductService.deleteProduct(idProduct).subscribe(data=>{
     this.getAllProcut();
    })
  }
  pagechangeHandler(evnet : number){
    this.p=evnet;
  }
  getSuppliers(){
    this.supplierService.getSuppliers().subscribe(data=>{
     this.listSupplier = data
    })
   }
   createForm() {
    this.myForm = this.fb.group({
      price: ['', [Validators.pattern("^[0-9]+(\.[0-9]+)?$"),Validators.required]],
      Quantity: ['', [Validators.pattern("^[0-9]+$"),Validators.required]],
      supplier: ['', [Validators.required]]
    });
  }
  SupplyingProduct() {
    this.Supplying  = !this.Supplying;
    this.Supplying && this.getSuppliers();
  }

  Supply(){
    
  }

}
