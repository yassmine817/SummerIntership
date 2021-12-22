import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/WebSite/shared/job.service';
import { Offer } from 'src/app/WebSite/shared/offer.model';
@Component({
  selector: 'app-active-offers',
  templateUrl: './active-offers.component.html',
  styleUrls: ['./active-offers.component.css']
})
export class ActiveOffersComponent implements OnInit {

  offer!: Offer[];

  constructor( public jobservice:JobService) { }

  ngOnInit(): void {
      this.OfferList();
  }


  OfferList() {
    this.jobservice.getOffreListActive().subscribe((res) => {
      this.jobservice.offer= res as Offer[];
     // console.log(this.offer)
    });
  }
}
