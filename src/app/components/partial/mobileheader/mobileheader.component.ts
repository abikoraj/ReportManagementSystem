import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobileheader',
  templateUrl: './mobileheader.component.html',
  styleUrls: ['./mobileheader.component.scss']
})
export class MobileheaderComponent implements OnInit {
  showShadow=false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener("window:scroll",['$event'])
  scroll(event){
    this.showShadow=window.pageYOffset>30;
  }

}
