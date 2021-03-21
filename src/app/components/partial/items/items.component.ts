import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/model/setting';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input()items:any;
  constructor() { }
  url=Setting.url;

  ngOnInit(): void {

  }

}
