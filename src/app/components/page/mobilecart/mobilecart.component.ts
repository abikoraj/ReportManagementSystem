import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mobilecart',
  templateUrl: './mobilecart.component.html',
  styleUrls: ['./mobilecart.component.scss']
})
export class MobilecartComponent implements OnInit {

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
