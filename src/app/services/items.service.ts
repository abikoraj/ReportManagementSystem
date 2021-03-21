import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
items:any[]=[];

  constructor(private client:ApiService) { }
  loaditems(){
    this.client.get('allproducts')
    .subscribe((res:any)=>{
      this.items=res;
      console.log(res);
    },
    (err)=>{
      console.log(err);
    });
  }
}
