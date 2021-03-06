import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mezzo } from './models/mezzi.models';
import { Rent } from './models/rent.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  obsMezzi: Observable<Mezzo[]>;
  //varabile che conterrĂ  mezzo
  listaMezzi: Mezzo[];
  //creo una nuovo Mezzo che poi io andrĂ² a noleggiare
  rented: Mezzo = new Mezzo('#', '#', '#', '#');

  rentedvector: Rent[] = new Array<Rent>();

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    //ricordare che l'obs deve ritornare un vettore di tipo della classe creata
    this.obsMezzi = this.http.get<Mezzo[]>(
      'https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi'
    );
    this.obsMezzi.subscribe(this.getMezzi);
  }

  getMezzi = (data: Mezzo[]) => {
    //lista mezzi conterrĂ  tutto grazie all'arrow function
    this.listaMezzi = data;
    console.log(this.listaMezzi);
  };
}
