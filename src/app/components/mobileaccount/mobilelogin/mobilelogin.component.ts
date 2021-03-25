import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mobilelogin',
  templateUrl: './mobilelogin.component.html',
  styleUrls: ['./mobilelogin.component.scss']
})
export class MobileloginComponent implements OnInit {

  form:FormGroup;
  constructor(private auth:AuthService, private router:Router,private formBuilder:FormBuilder) { 
    if(this.auth.logged){
      this.router.navigate([this.auth.redirect]);
    }
    this.auth.signupstart.subscribe((res)=>{
    });
    this.auth.signupsucceeded.subscribe((res)=>{
      
      this.router.navigate([this.auth.redirect]);
    });
    this.auth.signupfailed.subscribe((res)=>{
      alert('login Failed Try again');
      
    });
    this.auth.authSet.subscribe((res)=>{

        this.router.navigate([this.auth.redirect]);
    });
  }
  ionViewWillEnter(){
    console.log("view enter");
    console.log('user loaded view enter');
    if(this.auth.logged){
      this.router.navigate(['/user']);

    }
  }

  ngOnInit() {
    this.form=this.formBuilder.group({
        phone:[null,[Validators.required,Validators.minLength(10)]],
        password:[null,Validators.required]
    });
  }

  login(){
    if(this.form.valid){
      console.log(this.form.value)
      this.auth.loginWithPhone(this.form.value);
    }
  }
  close(){
    var temp=this.auth.prevurl;
    this.auth.prevurl="/account";
    this.router.navigate([temp]);
  }

  gotoSignUp(){
    this.auth.signupredirecturl="/mobilelogin";
    this.router.navigate(["/mobilesignup"]);
  }

}
