import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
 sliders:any[]=[];

  constructor(private client:ApiService) { }
  loadSliders(){
    this.client.get('sliders')
    .subscribe((res:any)=>{
      this.sliders=res;
      console.log(res);

    },
    (err)=>{
      console.log(err);
    });
  }
}
