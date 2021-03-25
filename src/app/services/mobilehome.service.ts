import { Injectable } from '@angular/core';
import { Setting } from '../model/setting';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MobilehomeService {

  sections:any[]=[];
  sliders:any[]=[];
  url=Setting.url;

  constructor(private client:ApiService) {
    this.loadHomePage();
   }
  loaded = false;

  loadHomePage(){
    if(!this.loaded){
      this.client.get('homepage').subscribe((response:any[])=>{
        this.sections=response;
        console.log(this.sections);
        this.loaded=true;
      });
    }
  }
}
