import { Order } from './../../../Shared/Models/Order.model';
import { CustomerService } from './../../../Shared/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-order',
  templateUrl: './cust-order.component.html',
  styleUrls: ['./cust-order.component.css']
})
export class CustOrderComponent implements OnInit {
  data = [];
  id;
  p: number = 1;
  constructor(private route: ActivatedRoute,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.fetchOrder();
  }


  fetchOrder(){
    this.customerService.getOredrByCustomerId(this.id).subscribe(
      res => {
        this.data = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  



}
