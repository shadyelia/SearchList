import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

export interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  selectedValue: string;

  tickets = [];
  types: Type[] = [
    { value: 'Fight', viewValue: 'Fight' },
    { value: 'Fire', viewValue: 'Fire' }
  ];

  constructor(private db: AngularFireDatabase) {}

  filldata() {
    this.tickets = [];
    this.db
      .list('/tickets')
      .valueChanges()
      .subscribe(res => {
        res.forEach(element => {
          if (element['Type'] === this.selectedValue) {
            this.tickets.push(element);
          }
        });
        console.log(this.tickets);
      });
  }

  ngOnInit() {}
}
