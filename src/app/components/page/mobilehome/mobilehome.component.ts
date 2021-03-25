import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';
import { MobilehomeService } from 'src/app/services/mobilehome.service';

@Component({
  selector: 'app-mobilehome',
  templateUrl: './mobilehome.component.html',
  styleUrls: ['./mobilehome.component.scss']
})
export class MobilehomeComponent implements OnInit {

  constructor(public  service:MobilehomeService) { }

  ngOnInit(): void {
  }
  trackBy(index: number, name: any): number {
    return name.id;
  }
}
