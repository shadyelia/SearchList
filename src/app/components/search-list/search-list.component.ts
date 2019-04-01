import { Component, OnInit } from '@angular/core';


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

  types: Type[] = [
    {value: 'fight', viewValue: 'Fight'},
    {value: 'fire', viewValue: 'fire'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
