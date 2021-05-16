import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Shared/Models/Products.model';
import { ProductService } from 'src/app/Shared/services/product.service';

@Component({
  selector: 'app-produt-details',
  templateUrl: './produt-details.component.html',
  styleUrls: ['./produt-details.component.css']
})
export class ProdutDetailsComponent implements OnInit {

  constructor(private productService : ProductService,
    private activeRoute:ActivatedRoute
    ) { }
  product : Product = new Product();
  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.paramMap.get("id")
   this.getProudct(id)

  }
  getProudct(id:number){
    this.productService.getByProductId(id).subscribe(data=>{
      this.product=data
      console.log(data);
      
    })

  }

}
