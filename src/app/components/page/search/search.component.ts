import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  $products=[];
  keyword:string;
  constructor(private client:ApiService) { }

  ngOnInit(): void {
  }

  search(){
    let data={keywords:this.keyword};
    this.client.post("search",data)
    .subscribe();
  }

}
