import { Component, Input, OnInit } from '@angular/core';
import { Mezzo } from '../models/mezzi.models';
import { Rent } from '../models/rent.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css'],
})
export class DrivingListComponent implements OnInit {
  @Input() listaMezzi: Mezzo[];
  @Input() rented: Mezzo;

  @Input() rentedvector: Rent[];
  constructor() {}

  ngOnInit(): void {}

  noleggia(mezzo) {
    this.rented.descrizione = mezzo.descrizione;
    this.rented.tariffa = mezzo.tariffa;
    this.rented.tipo = mezzo.tipo;
    this.rented.valutazionemedia = mezzo.valutazionemedia;

    let r = new Rent();

    r.numerinoleggi = 1;
    r.mezzo = mezzo;
    this.rentedvector.push(r);
  }
}
