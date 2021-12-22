import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/WebSite/shared/job.service';
import { Offer } from 'src/app/WebSite/shared/offer.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-offreupdate',
  templateUrl: './offreupdate.component.html',
  styleUrls: ['./offreupdate.component.css']
})
export class OffreupdateComponent implements OnInit {
form:any;
p:any
  currentOffre: any;
  message='';
  constructor(public jobservice:JobService , private activatedRoute: ActivatedRoute ,private router: Router) {
   }

  
   ngOnInit(): void {
   
   }
 
}