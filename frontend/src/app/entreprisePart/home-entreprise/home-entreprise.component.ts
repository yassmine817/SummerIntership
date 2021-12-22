import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../WebSite/shared/token-storage.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-entreprise',
  templateUrl: './home-entreprise.component.html',
  styleUrls: ['./home-entreprise.component.css']
})
export class HomeEntrepriseComponent implements OnInit {

  currentUser: any;
  private roles?: string[];
  isLoggedIn = false;

 
  nom?: string;
  constructor(private token: TokenStorageService ,private router : Router) { }

  ngOnInit() {
   this.currentUser = this.token.getUser();
    this.isLoggedIn = !!this.token.getToken();


    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.nom= user.nomEntreprise;
    }
    this.currentUser = this.token.getUser();
    console.log(this.nom)
  }

  logout() {
    
  
    this.token.signOut();
    //window.location.reload();
   this.router.navigateByUrl('/login');
  }
}