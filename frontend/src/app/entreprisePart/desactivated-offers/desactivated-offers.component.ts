import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/WebSite/shared/job.service';
import { Offer } from 'src/app/WebSite/shared/offer.model';
@Component({
  selector: 'app-desactivated-offers',
  templateUrl: './desactivated-offers.component.html',
  styleUrls: ['./desactivated-offers.component.css']
})
export class DesactivatedOffersComponent implements OnInit {

  offer!: Offer[];

  constructor( public jobservice:JobService) { }

  ngOnInit(): void {
      this.OfferList();
  }


  OfferList() {
    this.jobservice.getOffreListDesactive().subscribe((res) => {
      this.jobservice.offer= res as Offer[];
     // console.log(this.offer)
    });
  }
}
