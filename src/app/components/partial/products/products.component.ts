import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from 'src/app/model/setting';
import { ItemsService } from 'src/app/services/items.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  singleurl="/product";
  @Input()item:any;
  constructor(private router:Router,public search:SearchService) { }
  url=Setting.url;

  ngOnInit(): void {
    this.singleurl=window.innerWidth>768?"/product":"/mobproduct";

  }

  loadProduct(){
    this.search.currentimage=this.url+ this.item.product_images;
    this.router.navigate([this.singleurl+"/"+this.item.product_id]);
  }

}
