import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/WebSite/shared/job.service';
import { Offer } from 'src/app/WebSite/shared/offer.model';
import { Router , ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

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
