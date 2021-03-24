import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cart:CartService) { }

  ngOnInit(): void {
  }

  changed(data:Cart){
    this.cart.changeQty(data.qty,data.ident);
  }

  delete(data:Cart){
    console.log('on cart window');
    this.cart.remove(data.ident);
  }
}
