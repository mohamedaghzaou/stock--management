import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/Shared/Models/Supplier.model';

@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.css']
})
export class ListSupplierComponent implements OnInit {


  listSupplier : Supplier[]=[
    
    {id:1,firstname:"nnn",lastname:"vvkkk",email:"vavva",phone:'183884845ccccccccccc8458',address:"aijdjkdk"},{id:1,firstname:"nnn",lastname:"vvkkk",email:"vavva",phone:'1838848458458',address:"aijdjkdk"},
    {id:1,firstname:"nnn",lastname:"vvkkk",email:"vavva",phone:'1838848458458',address:"aijdjkdk"},
    {id:1,firstname:"nnn",lastname:"vvkkk",email:"vavva",phone:'1838848458458',address:"aijdjkdk"},
    {id:1,firstname:"nnn",lastname:"vvkkk",email:"vavva",phone:'1838848458458',address:"aijdjkdk"}];
  constructor() { }
  ngOnInit(): void {
  }
  update(id:number){

  }
  Delete(id:number){

  }
}
