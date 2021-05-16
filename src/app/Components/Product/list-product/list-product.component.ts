import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Shared/Models/Products.model';
import { ProductService } from 'src/app/Shared/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ListProductComponent implements OnInit {
  listProduct: Product[]=[];
  p: number;
  filter:string = "";
  constructor(private router:Router , private ProductService:ProductService) { }
  ngOnInit(): void {
    this.getAllProcut();
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
  update(idProduct:number){
    this.router.navigate(["/home/product/edit/"+idProduct])
  }
  pagechangeHandler(evnet : number){
    this.p=evnet;
  }
}
