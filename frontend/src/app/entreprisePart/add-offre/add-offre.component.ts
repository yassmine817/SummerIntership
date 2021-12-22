import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/WebSite/shared/job.service';
import { Router } from '@angular/router';
import { Offer } from 'src/app/WebSite/shared/offer.model';
@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {
  offer!: Offer[];
  form: any = {};
  isSuccessful = false;
  isAddedFailed = false;
  errorMessage = '';

  constructor(public jobservice:JobService, private router: Router) { }



  ngOnInit(): void {
  }

  onSubmit()
  {
    this.jobservice.addOffer(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isAddedFailed = false;
        this.router.navigateByUrl('/ListJob');
        
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isAddedFailed = true;
        console.log(err)
        
       
      }
    );
  }

  OfferList() {
    this.jobservice.getOffreList().subscribe((res) => {
      this.jobservice.offer= res as Offer[];
    });
  }



  }
