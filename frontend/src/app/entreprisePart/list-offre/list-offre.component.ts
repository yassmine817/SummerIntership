import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/WebSite/shared/job.service';
import { Offer } from 'src/app/WebSite/shared/offer.model';
import { Router , ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit {
  pers:Offer;
  constructor( public jobservice:JobService, private router: Router , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.OfferList();

      
      
    }
  

  OfferList() {
    this.jobservice.getOffreList().subscribe((res) => {
      this.jobservice.offer= res as Offer[];
    
    });
  }

 
  
    }
