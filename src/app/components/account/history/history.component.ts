import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/model/setting';
import { ViewedService } from 'src/app/services/viewed.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  url=Setting.url;
  producturl="";
  constructor(public history:ViewedService) { }

  ngOnInit(): void {
    this.producturl=window.innerWidth>768?"product":"mobproduct";
  }

}
