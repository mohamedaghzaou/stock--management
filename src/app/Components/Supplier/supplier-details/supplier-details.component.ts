import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Shared/services/product.service';
import { SupplierService } from 'src/app/Shared/services/supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  supplier;
  productList;
  constructor(private router :Router,private active : ActivatedRoute,
    private supplierService:SupplierService ,  
    private productService:ProductService 
     ) { }
  id:number
  ngOnInit(): void {
    this.id = +this.active.snapshot.paramMap.get("id")
    this.getSupplier(this.id);
    this.productService.ProudctBYSupplierId(this.id).subscribe(data=>{
     this.productList=data
    })
  }
  getSupplier(id:number){
      this.supplierService.getBySupplierId(this.id).subscribe(data=>{
        this.supplier = {...data}
      })
  }

}
