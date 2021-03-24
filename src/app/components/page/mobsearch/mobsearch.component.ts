import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mobsearch',
  templateUrl: './mobsearch.component.html',
  styleUrls: ['./mobsearch.component.scss']
})
export class MobsearchComponent implements OnInit {

  searching=false;
  products=[];
  keyword:string;
  searchkey:string[]=[];
  noproduct=false;
  constructor(private client:ApiService) { }

  ngOnInit(): void {
    var history = localStorage.getItem('search_history');
    console.log(history);
    if(history !=null && history!=undefined){
      this.searchkey=JSON.parse(history).slice(0,13);
    }
  }
  initSearch(item){
    this.keyword=item;
    this.search();
  }
  clear(){
    this.keyword="";
    this.products=[];
  }

  clearHistory(){
    this.searchkey=[];
    localStorage.setItem('search_history',JSON.stringify(this.searchkey));
  }

  search(){
    if(!this.searching){
  this.noproduct=false;
      // this.
      this.searching=true;
      let data={keyword:this.keyword};
      console.log(data);
      this.client.post("search",data)
      .subscribe((res:any)=>{
        this.products=res;
        this.searching=false;
        this.noproduct=this.products.length==0;

        if(this.searchkey.find(o=>o==this.keyword)==undefined){

          this.searchkey.push(this.keyword);
        }
        localStorage.setItem('search_history',JSON.stringify(this.searchkey));
      });
    }
  }


}
