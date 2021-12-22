import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './WebSite/acceuil/acceuil.component';
import { NavbarComponent } from './WebSite/navbar/navbar.component';
import { FooterComponent } from './WebSite/footer/footer.component';
import { AboutusComponent } from './WebSite/aboutus/aboutus.component';
import { SignupComponent } from './WebSite/signup/signup.component';
import { SigninComponent } from './WebSite/signin/signin.component';
import { SidebarComponent } from './studentPArt/sidebar/sidebar.component';
import { ProfileComponent } from './studentPArt/profile/profile.component';
import { ResumeComponent } from './studentPArt/resume/resume.component';
import { JobsListComponent } from './studentPArt/jobs-list/jobs-list.component';
import { DetailsJobComponent } from './studentPArt/details-job/details-job.component';
import { HomeEntrepriseComponent } from './entreprisePart/home-entreprise/home-entreprise.component';
import { AddOffreComponent } from './entreprisePart/add-offre/add-offre.component';
import { ListOffreComponent } from './entreprisePart/list-offre/list-offre.component';
import { OffreupdateComponent } from './entreprisePart/offreupdate/offreupdate.component';
import { DetailsOffreComponent } from './entreprisePart/details-offre/details-offre.component';
import { ActiveOffersComponent } from './active-offers/active-offers.component';
import { DesactivatedOffersComponent } from './entreprisePart/desactivated-offers/desactivated-offers.component';
import { AppliedStudentsComponent } from './applied-students/applied-students.component';
import { ProfileCompanyComponent } from './entreprisePart/profile-company/profile-company.component';
import { SearchEnrepriseComponent } from './WebSite/search-enreprise/search-enreprise.component';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    SignupComponent,
    SigninComponent,
    SidebarComponent,
    ProfileComponent,
    ResumeComponent,
    JobsListComponent,
    DetailsJobComponent,
    HomeEntrepriseComponent,
    AddOffreComponent,
    ListOffreComponent,
    OffreupdateComponent,
    DetailsOffreComponent,
    ActiveOffersComponent,
    DesactivatedOffersComponent,
    ProfileCompanyComponent,
    AppliedStudentsComponent,
    SearchEnrepriseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
