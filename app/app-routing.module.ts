import { UpdateTeamComponent } from './team/update-team/update-team.component';
import { CreatTeamComponent } from './team/creat-team/creat-team.component';
import { ListTeamComponent } from './team/list-team/list-team.component';
import { UpdateManagerComponent } from './managerr/update-manager/update-manager.component';
import { CreatManagerComponent } from './managerr/creat-manager/creat-manager.component';
import { ListManagerComponent } from './managerr/list-manager/list-manager.component';
import { UpdateInstreactorComponent } from './instractor/update-instreactor/update-instreactor.component';
import { CreatInstreactorComponent } from './instractor/creat-instreactor/creat-instreactor.component';
import { ListInstreactorComponent } from './instractor/list-instreactor/list-instreactor.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { HomeComponent } from './sharedUi/home/home.component';
import { FooterComponent } from './sharedUi/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreatStudentComponent } from './student/creat-student/creat-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AboutUsComponent } from './sharedUi/about-us/about-us.component';
import { ContactComponent } from './sharedUi/contact/contact.component';
import { ServicesComponent } from './sharedUi/services/services.component';
import { PortfolioComponent } from './sharedUi/portfolio/portfolio.component';
import { TeamComponent } from './sharedUi/team/team.component';
import { NavbarComponent } from './sharedUi/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {  path:"home",component:HomeComponent},
{  path:"",component:HomeComponent},
{  path:"navbar",component:NavbarComponent},
{  path:"team",component:TeamComponent},
{  path:"portfolio",component:PortfolioComponent},
{  path:"services",component:ServicesComponent},
{  path:"contact",component:ContactComponent},
{  path:"aboutUs",component:AboutUsComponent},
{  path:"ls",component:ListStudentComponent},
{  path:"cs",component:CreatStudentComponent},
{  path:"us/:id",component:UpdateStudentComponent},
{  path:"il",component:ListInstreactorComponent},
{  path:"ci",component:CreatInstreactorComponent},
{  path:"ui/:id",component:UpdateInstreactorComponent},
{  path:"lm",component:ListManagerComponent},
{  path:"cm",component:CreatManagerComponent},
{  path:"um/:id",component:UpdateManagerComponent},
{  path:"lt",component:ListTeamComponent},
{  path:"ct",component:CreatTeamComponent},
{  path:"ut/:id",component:UpdateTeamComponent},
{  path:"footer",component:FooterComponent},
{  path:"**",component:NotFoundComponent},
















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
