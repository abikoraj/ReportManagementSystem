import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searching=false;
  products=[];
  keyword:string;
  searchkey:string[]=[];
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

  clearHistory(){
    this.searchkey=[];
    localStorage.setItem('search_history',JSON.stringify(this.searchkey));
  }
  search(){
    if(!this.searching){
      this.searching=true;
      let data={keyword:this.keyword};
      console.log(data);
      this.client.post("search",data)
      .subscribe((res:any)=>{
        this.products=res;
        this.searching=false;
        if(this.searchkey.find(o=>o==this.keyword)==undefined){

          this.searchkey.push(this.keyword);
        }
        localStorage.setItem('search_history',JSON.stringify(this.searchkey));
      });
    }
  }

}
