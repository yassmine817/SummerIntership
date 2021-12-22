import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedStudentsComponent } from './applied-students/applied-students.component';
import { AddOffreComponent } from './entreprisePart/add-offre/add-offre.component';
import { DesactivatedOffersComponent } from './entreprisePart/desactivated-offers/desactivated-offers.component';
import { HomeEntrepriseComponent } from './entreprisePart/home-entreprise/home-entreprise.component';
import { ListOffreComponent } from './entreprisePart/list-offre/list-offre.component';
import { OffreupdateComponent } from './entreprisePart/offreupdate/offreupdate.component';
import { DashboardComponent } from './studentPArt/dashboard/dashboard.component';
import { JobsListComponent } from './studentPArt/jobs-list/jobs-list.component';
import { ResumeComponent } from './studentPArt/resume/resume.component';
import { AcceuilComponent } from './WebSite/acceuil/acceuil.component';
import { SigninComponent } from './WebSite/signin/signin.component';
import { SignupComponent } from './WebSite/signup/signup.component';
import { ProfileCompanyComponent } from './entreprisePart/profile-company/profile-company.component';
import { ActiveOffersComponent } from './active-offers/active-offers.component';

const routes: Routes = [
 {path: '', component: AcceuilComponent}, 
 {path: 'register', component: SignupComponent}, 
 {path: 'login', component: SigninComponent}, 
 {path: 'dashboard', component: DashboardComponent}, 
 {path:'resumer',component:ResumeComponent},
 {path:'jobsList',component:JobsListComponent},
 {path:'HomeEntreprise',component:HomeEntrepriseComponent},
 {path:'addOffre',component:AddOffreComponent},
 {path:'ListJob',component:ListOffreComponent},
 //{path:'updateJob/:id',component:OffreupdateComponent},
 {path:'ActivatedOffers',component:ActiveOffersComponent},
 {path:'DesactivatedOffers',component:DesactivatedOffersComponent},
 {path:'AppliedStudent', component:AppliedStudentsComponent},
 {path:'profileCompany', component:ProfileCompanyComponent},
 {path:'EditOffre', component:OffreupdateComponent},
 {path:'ListOfOffers', component:JobsListComponent}


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
