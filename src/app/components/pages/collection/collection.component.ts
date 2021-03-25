import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {

  loaded=false;
  collections:any[]=[];
  constructor(private client:ApiService) { }

  ngOnInit() {
    this.client.get("collectionssummary")
    .subscribe((res:any)=>{
      console.log(res,"res");
      this.collections=res;
      this.loaded=true;
    });
  }

  trackBy(index: number, item: any): number {
    return item.collection_id;
  }
}
