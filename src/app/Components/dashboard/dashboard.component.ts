import { OrderService } from './../../Shared/services/order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sumVents;
  countClient;
  countFours;


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendedi', 'Semedi', 'dimanche'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
      this.getSums();
      this.getFous();
      this.getClients();
  }

  getSums(){
    this.orderService.getTotalVentsByMonth().subscribe(
      res => this.sumVents = res,
      err => console.log(err)
    )
  }

  getClients(){
    this.orderService.getTotalCustomer().subscribe(
      res => this.countClient = res,
      err => console.log(err)
    )
  }

  getFous(){
    this.orderService.getTotalSupplier().subscribe(
      res => this.countFours = res,
      err => console.log(err)
    )
  }


  }
   


