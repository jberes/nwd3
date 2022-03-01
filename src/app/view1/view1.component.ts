import { Component, OnInit } from '@angular/core';
import { Northwind1Service } from '../services/northwind1.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public northwind1Customers: any = null;

  constructor(
    private northwind1Service: Northwind1Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwind1Service.getCustomers().subscribe(data => this.northwind1Customers = data);
  }
}
