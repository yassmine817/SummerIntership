import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/WebSite/shared/job.service';
import { EntrepriseService } from 'src/app/WebSite/shared/entreprise.service';
import { Offer } from 'src/app/WebSite/shared/offer.model';
import { Router , ActivatedRoute, ParamMap} from '@angular/router';
import { Entreprise } from 'src/app/WebSite/shared/entreprise.model';
@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
form:any={}
entreprise:any
  pers:Offer;
  nomE:''
  currentIndex = -1;
  constructor( public jobservice:JobService, private router: Router , private activatedRoute:ActivatedRoute , public  entrepriseService:EntrepriseService ) { }

  ngOnInit(): void {
     this.OfferList();

      
      
    }
  

  OfferList() {
    this.jobservice.getOffreList().subscribe((res) => {
      this.jobservice.offer= res as Offer[];
    
    });
  }


  searchTitle() {
    this.entrepriseService.getEntList(this.nomE)
      .subscribe(
        data => {
          this.entreprise = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
