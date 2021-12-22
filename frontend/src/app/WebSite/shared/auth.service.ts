import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      fullname:user.fullname,
    email: user.email,
    password: user.password,
    civilite:user.civilite
    }, httpOptions);
  }

  registerEntreprise(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'signupEntreprise', {
      fullname:user.fullname,
    email: user.email,
    password: user.password,
    nomEntreprise:user.nomEntreprise,
    siteweb:user.siteweb,
    tel:user.tel,
    Adresse:user.Adresse,
    identifiant:user.identifiant,
    secteurActivite:user.secteurActivite,

    }, httpOptions);
  }

  login(credentials: any ): Observable<any> {
    return this.http.post(AUTH_API +'signin',{
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  loginEntreprise(credentials: any ): Observable<any> {
    return this.http.post(AUTH_API +'signinE',{
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  

}

