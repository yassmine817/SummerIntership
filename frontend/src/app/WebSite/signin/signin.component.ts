import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { TokenStorageService } from '../shared/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router : Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
     this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      console.log(this.roles);
    }
  }

  onSubmit() {
   
    if(this.roles = ['ROLE_STUDENT']) 
    { this.authService.login(this.form).subscribe(
       data => {
         this.tokenStorage.saveToken(data.accessToken);
         this.tokenStorage.saveUser(data);
 
         this.isLoginFailed = false;
         this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        
         this.router.navigateByUrl('/dashboard');
         console.log(this.roles)
         //this.reloadPage();
 
       },
       err => {
         this.errorMessage = err.error.message;
         this.isLoginFailed = true;
       }
     );}

     
    if (this.roles= ['ROLE_ENTREPRISE'])
     {
      this.authService.loginEntreprise(this.form).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
         this.roles = this.tokenStorage.getUser().roles;
         
          this.router.navigateByUrl('/HomeEntreprise');
          console.log(this.roles)
          //this.reloadPage();
  
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );}

     }
   
 
 
  

  reloadPage() {
    window.location.reload();
  }
}