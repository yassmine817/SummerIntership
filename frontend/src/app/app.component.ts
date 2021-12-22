import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../app/WebSite/shared/token-storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntenshipProject';

  private roles?: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  fullname?: string;

  constructor(private tokenStorageService: TokenStorageService  ,public router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

     // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.fullname = user.fullname;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
