import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Setting } from 'src/app/model/setting';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentRoute="";
  redirecturls=[
    '/account/orders'
  ];
  constructor(public auth:AuthService,private client:ApiService,private router:Router) {
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
        .subscribe((event:any) => 
        {
            this.currentRoute = event.url;          
            console.log(event);
        });
    
   }

  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      console.log(event.target.result);
      this.auth.user.image=event.target.result;
       
      let fd=new FormData();
      fd.append('image',file)
      this.client.postFileWithAuth("auth/ProfileImage",fd)
      .subscribe((res:any)=>{

      });

     
    });

    reader.readAsDataURL(file);
  }

  logOut(){
    localStorage.removeItem('access_token');
    this.auth.logged=false;
    this.auth.user=null;
    if(this.redirecturls.findIndex(o=>o==this.currentRoute)>-1){
      this.router.navigate(['/account/login'])
    }
  }
}
