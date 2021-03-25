import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit {
  products:any[]=[];
  @Input()item:any;
  constructor() { }

  ngOnInit() {
    this.products=this.item.products;
  }

}
