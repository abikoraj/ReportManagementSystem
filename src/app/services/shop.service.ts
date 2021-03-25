import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private client:ApiService) { 
    this.load();
  }

  canprev=true;
  cannext=true;
  pages=0;
  currentpage=0;
  loading=true;
  loaded=false;
  allproducts=[];
  products=[];
  load(){
    if(!this.loaded){

      this.client.get('allproducts')
      .subscribe((res:any)=>{
        this.allproducts=res;
        console.log(res);
        this.loading=false;
        this.loaded=true;
        this.pages=Math.trunc(this.allproducts.length/24);
        let mod=this.allproducts.length % 24;
        this.pages+=mod>0?1:0;
        console.log(this.pages);
        this.paginate(1);

      },
      (err)=>{
        console.log(err);
        this.loading=false;
        this.loaded=true;
  
      });
    }
  }



  paginate(index:number){
    this.currentpage=index;
    let  from=(index-1) *24;
    let  to=(index *24);
    this.products=this.allproducts.slice(from,to);
    window.scroll(0,0);
    this.cannext=this.currentpage<this.pages;
    this.canprev=this.currentpage>1;
  }

  prev(){
    this.currentpage-=1;
    this.paginate(this.currentpage);
  }

  next(){
    this.currentpage+=1;
    this.paginate(this.currentpage);
  }
  

  
}
