import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-mobileshop',
  templateUrl: './mobileshop.component.html',
  styleUrls: ['./mobileshop.component.scss']
})
export class MobileshopComponent implements OnInit {
  constructor(public shopservice:ShopService) { }

  ngOnInit(): void {

      
  }

}
