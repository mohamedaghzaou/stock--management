import { PdfService } from './../../Shared/services/pdf.service';
import { Component, OnInit } from '@angular/core';


export class Product{
  name: string;
  price: number;
  qty: number;
}
export class Invoice{
  customerName: string;
  address: string;
  contactNo: number;
  email: string;

  products: Product[] = [];
  additionalDetails: string;

  constructor(){
    // Initially one empty product row we will show 
    this.products.push(new Product());
  }
}


@Component({
  selector: 'app-testpdf',
  templateUrl: './testpdf.component.html',
  styleUrls: ['./testpdf.component.css']
})
export class TestpdfComponent implements OnInit {

 constructor(private pdfService: PdfService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  invoice = new Invoice(); 


  addProduct(){
    this.invoice.products.push(new Product());
  }

  generatePDF(){
    //  this.pdfService.generatePDF(this.invoice);
  }

}
