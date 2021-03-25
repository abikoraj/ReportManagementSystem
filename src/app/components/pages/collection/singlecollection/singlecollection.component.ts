import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Setting } from 'src/app/model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-singlecollection',
  templateUrl: './singlecollection.component.html',
  styleUrls: ['./singlecollection.component.scss'],
})
export class SinglecollectionComponent implements OnInit {
  id:string;
  coll:any;
  products=[];
  url=Setting.url;
  constructor(
    public client: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.client.get("collection/"+this.id)
    .subscribe((res:any)=>{
      this.coll=res;
      this.products= this.coll.products;
    });
  }

}
