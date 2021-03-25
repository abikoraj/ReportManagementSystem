import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  
  constructor(public shopservice:ShopService) { }

  ngOnInit(): void {

      
  }

}
