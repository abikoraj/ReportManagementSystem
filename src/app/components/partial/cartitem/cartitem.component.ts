import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Setting } from 'src/app/model/setting';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit {
  @Input()item:Cart;
  url=Setting.url;
  constructor() { }

  

  @Output() changed=new EventEmitter<Cart>()
  @Output() deleted=new EventEmitter<Cart>()

  ngOnInit() {
    // this.largescreen=window.innerWidth<768;
  }

  addQty(num:any){
    this.item.qty+=parseFloat( num);
    if(this.item.qty<1){
      this.item.qty=1;
    }
    this.changed.emit(this.item);
  }

  delete(){
    this.deleted.emit(this.item);
    console.log("Delete started");
  }
}
