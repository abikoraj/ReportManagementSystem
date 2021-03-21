import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headercart',
  templateUrl: './headercart.component.html',
  styleUrls: ['./headercart.component.scss']
})
export class HeadercartComponent implements OnInit {

  searchurl="/search";
  constructor() { }

  ngOnInit(): void {
    this.searchurl=window.innerWidth<768?"/mobsearch":"search";
  }

}
