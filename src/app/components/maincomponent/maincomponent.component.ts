import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.scss']
})
export class MaincomponentComponent implements OnInit {
  ismobile=false;
  constructor( ) { }

  ngOnInit(): void {
    this.ismobile=window.innerWidth<768;
  }


}
