import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  phone:string="";
  token:string="";
  password:string="";
  retypepassword:string="";
  constructor(private client: ApiService, private router: Router) { }
  lock:boolean=false;
  ngOnInit() { }

  close() {
    this.router.navigate(['/forgot']);
  }

  validate(){
    if(this.phone.length!=10){
      alert("Please Ente Proper Phone no");
      return false;
    }

    if(this.token==""){
      alert("Please Enter Token");
      return false;
    }
    if(this.password.length<6){
      alert("Please Enter Password Longer than 6 letters");
      return false;
    }
    if(this.password!=this.retypepassword){
      alert("Please comfirm password");
      return false;
    }
    return true;
  }

  resetPassword(){
    if(!this.lock){

      if(this.validate()){
        this.lock=true;
        this.client.post("auth/resetpasswordPhone",{
          phone:this.phone,
          token:this.token,
          password:this.password
        }).subscribe((res:any)=>{
          this.lock=false;
          if(res.status){
            this.router.navigate(['/account/login']);
          }else{
            alert(res.message);
          }
        },
        (err)=>{
          this.lock=false;
          alert('Cannot Reset Password,Connection Lost');
        })
        
      }
    }
  }

}
