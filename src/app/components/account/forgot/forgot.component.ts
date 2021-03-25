import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  lock=false;
  phone=""
  constructor(private client:ApiService,private router :Router) { }

  ngOnInit() {}

  close(){
    this.router.navigate(['/login']);
  }

  sendResetCode(){
    if(!this.lock){
      if(this.phone.length!=10){
        alert("Please Enter Valid Phone Number");
        return false;
      }
      this.lock=true;
      this.client.post("auth/forgotpasswordPhone",{"phone":this.phone})
      .subscribe((res)=>{
        this.lock=false;
        this.router.navigate(['/account/reset']);

      })
    }
  }
}
