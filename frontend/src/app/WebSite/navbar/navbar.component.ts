import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import{TokenStorageService}from '../../WebSite/shared/token-storage.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any;
  private roles!: string[];
  isLoggedIn = false;

  fullname!: string;

  constructor(private tokenStorageService: TokenStorageService,private router : Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();


    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.fullname = user.fullname;
    }
    this.currentUser = this.tokenStorageService.getUser();
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
   this.router.navigateByUrl('/login');
  }
}