import { Customer } from './../../../Shared/Models/Customer.model';
import { CustomerService } from './../../../Shared/services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  items: Customer[];
  firstname;
  p: number = 1;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.fetchdata();
  }


  fetchdata(){
    this.customerService.getItems().subscribe(
      res => {
        this.items = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  Search(){
    if(this.firstname==""){
      this.ngOnInit();
    }else{
        this.items = this.items.filter(
          res => {
            return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase()) 
                   || res.lastname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase())
                   || res.email.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
          }
        )
    }
  }

  delete(id){
    this.customerService.deleteItem(id).subscribe(
      res => {
        this.fetchdata();
      },
      err => {
        console.log('error : ' + err);
      }
    );
  }
}
