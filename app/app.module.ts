import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedUi/navbar/navbar.component';
import { AboutUsComponent } from './sharedUi/about-us/about-us.component';
import { ServicesComponent } from './sharedUi/services/services.component';
import { PortfolioComponent } from './sharedUi/portfolio/portfolio.component';
import { TeamComponent } from './sharedUi/team/team.component';
import { ContactComponent } from './sharedUi/contact/contact.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { CreatStudentComponent } from './student/creat-student/creat-student.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './sharedUi/footer/footer.component';
import { HomeComponent } from './sharedUi/home/home.component';

import{FormsModule} from "@angular/forms";
import {HttpClientModule  } from "@angular/common/http";
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { CreatInstreactorComponent } from './instractor/creat-instreactor/creat-instreactor.component';
import { ListInstreactorComponent } from './instractor/list-instreactor/list-instreactor.component';
import { UpdateInstreactorComponent } from './instractor/update-instreactor/update-instreactor.component';
import { CreatManagerComponent } from './managerr/creat-manager/creat-manager.component';
import { ListManagerComponent } from './managerr/list-manager/list-manager.component';
import { UpdateManagerComponent } from './managerr/update-manager/update-manager.component';
import { CreatTeamComponent } from './team/creat-team/creat-team.component';
import { ListTeamComponent } from './team/list-team/list-team.component';
import { UpdateTeamComponent } from './team/update-team/update-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    ListStudentComponent,
    CreatStudentComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent,
    UpdateStudentComponent,
    CreatInstreactorComponent,
    ListInstreactorComponent,
    UpdateInstreactorComponent,
    CreatManagerComponent,
    ListManagerComponent,
    UpdateManagerComponent,
    CreatTeamComponent,
    ListTeamComponent,
    UpdateTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
