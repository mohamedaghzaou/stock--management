import { OrderService } from './../../../Shared/services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CartOrder } from 'src/app/Shared/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  articles=[1];
  count=1;
  cartOrder$: CartOrder;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private orderService: OrderService) { }
  // constructor(){}

  ngOnInit(): void {
   this.createForm();
   this.orderService.carts$.subscribe(
     res => this.cartOrder$ = res
   )

  }

  createForm(): any{
    this.myForm = this.fb.group({

      idClient : ['', [Validators.required]],
    })
  }

  valide():any{
  this.orderService.passOrder(this.myForm.get("idClient").value);

  }
  
  AjouterLign(){
    this.orderService.addLigne();
  }

}
