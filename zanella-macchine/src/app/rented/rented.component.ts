import { Component, Input, OnInit } from '@angular/core';
import { Mezzo } from '../models/mezzi.models';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css']
})
export class RentedComponent implements OnInit {

   //vuole come input un mezzo per quersto non è un vettore
  @Input() rented:Mezzo;
  constructor() { }

  ngOnInit(): void {
  }

}
