import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/model/setting';
import { HomepageService } from 'src/app/services/homepage.service';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public homeService :HomepageService) { }
  url=Setting.url;
  ngOnInit(): void {
    
  }

}
