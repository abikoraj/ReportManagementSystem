import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private auth:AuthService,private router:Router) { 
    if(this.auth.logged){
      this.router.navigate(["/account"]);
    }
    this.auth.signupstart.subscribe((res)=>{
       
    });
    this.auth.signupsucceeded.subscribe((res)=>{
      this.router.navigate(["/account"]);
    });
    this.auth.signupfailed.subscribe((res)=>{
      alert('Signup Failed Try again');
      
    });
    this.auth.authSet.subscribe((res)=>{
        this.router.navigate(['/account']);
    });
  }

  ngOnInit() {
    
    this.form = this.formBuilder.group({
      phone:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null,  Validators.email],
      address: [null,Validators.required],
      password:[null,[Validators.required]],
      repass:[null,Validators.required]
    },
      { validators: this.checkPasswords }
    );
  }

  isNumeric(group: FormGroup){
    const phone = group.get('phone').value;
   
    return this.isNumber(phone);
  }

  isNumber(value: string | number): boolean
  {
    return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
  }
  register(data=null){
    console.log(this.form.valid)
    console.log(this.form.value);
    if(this.form.valid){
      this.auth.signup(this.form.value);
    }else{
      alert('Please Fill All Forms Properly');
    }
  }

  ionViewWillEnter(){
    console.log("view enter");
    console.log('user loaded view enter');
    if(this.auth.logged){
      this.router.navigate(['/account']);

    }
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const phone = group.get('phone').value;

    const password = group.get('password').value;
    const confirmPassword = group.get('repass').value;
    return (password === confirmPassword ? null : { notSame: true } ) && this.isNumber(phone);   
  }
  
  close(){
    var temp=this.auth.signupredirecturl;
    this.auth.signupredirecturl="/login";
    this.router.navigate([temp]);
  }
}
