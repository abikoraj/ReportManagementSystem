import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from 'src/app/model/setting';

@Component({
  selector: 'app-collectionitem',
  templateUrl: './collectionitem.component.html',
  styleUrls: ['./collectionitem.component.scss'],
})
export class CollectionitemComponent implements OnInit {
  url=Setting.url;
  @Input() coll:any
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.coll,"collection single");
  }

  loadSingle(){
    if(window.innerWidth>768){

      this.router.navigate(["/collection/"+this.coll.collection_id]);
    }else{
      this.router.navigate(["/mobilecollection/"+this.coll.collection_id]);

    }
  }

}
