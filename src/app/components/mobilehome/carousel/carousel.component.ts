import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/model/setting';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input()item:any;
  images:string[]=[];
  url=Setting.url;
 
  constructor() { }

  getData(e){
    let temp=this.images;
    console.log(temp,"carou");
    console.log(e,"carou");
  }
  ngOnInit() {
  console.log(this.item,"carou");
  let temparr=[];
    this.item.sliders.forEach(element => {
      temparr.push(Setting.url+element.image);
    });
    this.images=temparr;
    console.log(this.images,"carou");
  }

}
