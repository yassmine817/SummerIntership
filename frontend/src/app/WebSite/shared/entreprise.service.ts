import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from '.././shared/entreprise.model'

const AUTH_API = 'http://localhost:8080/api/entreprises';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  entreprise!: Entreprise[];
  selectedEnt!:Entreprise;
  constructor(private http: HttpClient) { }


  getEntList(nomEntreprise:any){

    return this.http.get(AUTH_API + `/SearchEntreprise/?name=${nomEntreprise}`);
  }
  


}