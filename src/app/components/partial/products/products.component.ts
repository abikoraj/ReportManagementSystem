import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/model/setting';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input()item:any;
  constructor() { }
  url=Setting.url;

  ngOnInit(): void {
  }

}
