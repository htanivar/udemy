import { Component, OnInit } from '@angular/core';
import { SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Harry","Potter","harry.potter@angular.in",10000),
    new SalesPerson("Dark","Lord","dark.lord@angular.in",20000),
    new SalesPerson("Serias","Black","serias.black@angular.in",30000),
    new SalesPerson("Ron","Weasley","ron.weasley@angular.in",40000)
  ]

}
