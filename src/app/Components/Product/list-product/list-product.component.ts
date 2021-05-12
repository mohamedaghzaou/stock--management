import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/Models/Products.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProduct: Product[]=[]
  constructor() { }
  ngOnInit(): void {
    this.getAllProcut();
    this.listProduct = [

      {id:1,name:"product",description:"lkkkkkkkbbbbbbbbbbbbbb",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:1,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:1,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:1,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:1,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:1,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:1,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
      {id:1,name:"product",description:"lkkkkkkk",price:888,image:"llll",quantityStock:11,category:{id:1,name:"C3"}},
    ]
  }

  getAllProcut(){

  }

  delete(id:number){

  }
  update(id:number){
  }

}
