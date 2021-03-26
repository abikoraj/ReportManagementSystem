import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/model/setting';
import { ViewedService } from 'src/app/services/viewed.service';

@Component({
  selector: 'app-allview',
  templateUrl: './allview.component.html',
  styleUrls: ['./allview.component.scss'],
})
export class AllviewComponent implements OnInit {
  url=Setting.url;
  constructor(public view:ViewedService,private location:Location) { }

  ngOnInit() {}

  back(){
    this.location.back();
  }

}
