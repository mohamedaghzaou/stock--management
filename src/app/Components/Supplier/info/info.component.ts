import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from 'src/app/Shared/Models/Supplier.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() supplier : Supplier;
  constructor() { 
    console.log(this.supplier)
  }
  ngOnInit(): void {
    
  }
}
