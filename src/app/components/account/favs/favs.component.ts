import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/model/setting';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent implements OnInit {

  url=Setting.url;
  producturl="";
  constructor(public history:FavService) { }

  ngOnInit(): void {
    this.producturl=window.innerWidth>768?"product":"mobproduct";
  }

}
