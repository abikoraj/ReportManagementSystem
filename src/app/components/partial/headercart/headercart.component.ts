import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-headercart',
  templateUrl: './headercart.component.html',
  styleUrls: ['./headercart.component.scss']
})
export class HeadercartComponent implements OnInit {

  searchurl="/search";
  carturl="/cart";
  constructor(public cart:CartService) { }

  ngOnInit(): void {
    this.searchurl=window.innerWidth<768?"/mobsearch":"/search";
    this.carturl=window.innerWidth<768?"/mobcart":"/cart";
  }

}
