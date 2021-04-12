import { Component, Input, OnInit } from '@angular/core';
import { Mezzo } from '../models/mezzi.models';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css'],
})
export class DrivingListComponent implements OnInit {
  @Input() listaMezzi: Mezzo[];
  constructor() {}

  ngOnInit(): void {}


  noleggia(mezzo){
    console.log(mezzo)
  }
}



