import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  title="";
  orderTypes=["Pending","Processing","shipped","","completed"];
  type:string;
  orders:any;
  constructor(private route:ActivatedRoute,private client:ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.type=this.route.snapshot.paramMap.get('status');
      this.title="Orders - "+this.orderTypes[ Number(this.type)];
      this.client.getWithAuth("booking/orders/"+this.type)
      .subscribe((res:any)=>{
          this.orders=res;
          console.log(res);
      });
    });
  }

}
