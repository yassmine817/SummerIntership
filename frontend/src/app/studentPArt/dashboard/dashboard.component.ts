import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../WebSite/shared/token-storage.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: any;
  private roles?: string[];
  isLoggedIn = false;

 
  fullname?: string;
  constructor(private token: TokenStorageService ,private router : Router) { }

  ngOnInit() {
   this.currentUser = this.token.getUser();
    this.isLoggedIn = !!this.token.getToken();


    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.fullname= user.username;
    }
    this.currentUser = this.token.getUser();
  }

  logout() {
    
  
    this.token.signOut();
    //window.location.reload();
   this.router.navigateByUrl('/login');
  }
}