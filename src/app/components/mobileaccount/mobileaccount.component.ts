import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/model/setting';
import { AuthService } from 'src/app/services/auth.service';
import { FavService } from 'src/app/services/fav.service';
import { ViewedService } from 'src/app/services/viewed.service';

@Component({
  selector: 'app-mobileaccount',
  templateUrl: './mobileaccount.component.html',
  styleUrls: ['./mobileaccount.component.scss']
})
export class MobileaccountComponent implements OnInit {

  url=Setting.url;
  constructor(public authservice:AuthService,public viewservice:ViewedService,public fav:FavService) { }
  topped=false;
 
  ngOnInit() {
  }

  

  logout(){
    this.authservice.logOut();
  }
}
