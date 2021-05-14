import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Shared/Models/Products.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProduct: Product[]=[]
  constructor(private router:Router) { }
  ngOnInit(): void {
    this.getAllProcut();
    this.listProduct = [

      {id:1,name:"product",description:"lkkkkkkkbbbbbbbbbbbbbb",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:2,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:3,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:4,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:5,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:6,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:6,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:7,name:"product",description:"lkkkkkkk",price:888.8888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
    ]
  }

  getAllProcut(){

  }

  delete(idProduct:number){
    console.log(idProduct)
    const id = this.listProduct.findIndex(x=>x.id===idProduct)
    this.listProduct.splice(id,1)
   
  }
  update(idProduct:number){
    this.router.navigate(["/home/product/edit/"+idProduct])
  }

}
