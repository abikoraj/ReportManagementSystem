import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searches:any[]=[];
  public currentimage:string="";
  constructor( private client:ApiService) { }
  // search(keyword){
  //   this.client.get('sliders')
  // }
}
