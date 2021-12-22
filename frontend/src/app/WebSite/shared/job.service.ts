import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from './offer.model';

const AUTH_API = 'http://localhost:8080/api/entreprise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'} 
  
  )
};
@Injectable({
  providedIn: 'root'
})
export class JobService {
  offer!: Offer[];
  selectedJob!: Offer;
  constructor(public http: HttpClient) { }

  addOffer(offers:any): Observable<any> {
    return this.http.post(AUTH_API +'/offres', {
    title:offers.title,
    email: offers.email,
    jobeType: offers.jobeType,
    description:offers.description,
    country:offers.country,
    city:offers.city,
    categories:offers.categories,
    experience:offers.experience,
    deadline:offers.deadline,
    skillRequirments:offers.skillRequirments,
    //status:offer.status
    }, httpOptions);
  }

  getOffreList(){

    return this.http.get(AUTH_API +'/offres/list');
  }

  getOffreListActive(){

    return this.http.get(AUTH_API +'/offres/listActiver');
  }

  getOffreListDesactive(){

    return this.http.get(AUTH_API +'/offres/listDesactiver');
  }

 


  
  
}

