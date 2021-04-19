import { Component, Input, OnInit } from '@angular/core';
import { Rent } from '../models/rent.model';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css'],
})
export class RentListComponent implements OnInit {
  //niente new perchè già fatto prima
  @Input() rentedvector: Rent[];
  constructor() {}

  ngOnInit(): void {}
}
