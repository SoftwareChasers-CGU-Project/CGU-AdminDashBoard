import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteVacanciesComponent } from './vacancies/delete-vacancies/delete-vacancies.component';
import { ListVacanciesComponent } from './vacancies/list-vacancies/list-vacancies.component';
import { ViewVacancyComponent } from './vacancies/view-vacancy/view-vacancy.component';
import { AcceptVacanciesComponent } from './vacancies/accept-vacancies/accept-vacancies.component';
import { DeleteSessionRequestComponent } from './company-sessions/delete-session-request/delete-session-request.component';
import { ListSessionRequestsComponent } from './company-sessions/list-session-requests/list-session-requests.component';
import { UpdateSessionRequestComponent } from './company-sessions/update-session-request/update-session-request.component';
import { ViewSessionRequestComponent } from './company-sessions/view-session-request/view-session-request.component';
import { AddProgramComponent } from './programs/add-program/add-program.component';
import { DeleteProgramComponent } from './programs/delete-program/delete-program.component';
import { ListProgramsComponent } from './programs/list-programs/list-programs.component';
import { UpdateProgramsComponent } from './programs/update-programs/update-programs.component';
import { ViewProgramComponent } from './programs/view-program/view-program.component';
import { ListAcceptedRequestsComponent } from './company-sessions/list-accepted-requests/list-accepted-requests.component';


 


const routes: Routes = [
  {path: 'programs',
    children:[
      {path: '', component: ListProgramsComponent},
      {path: 'list', component: ListProgramsComponent},
      {path: 'delete/:programId', component: DeleteProgramComponent},
      {path: 'edit/:programId', component:UpdateProgramsComponent},
      {path: 'view/:programId', component: ViewProgramComponent},
      {path: 'create', component: AddProgramComponent},
    ]
},

{path: 'company-sessions',
    children:[
      {path: '', component: ListSessionRequestsComponent},
      {path: 'list', component: ListSessionRequestsComponent},
      {path: 'delete/:sessionId', component: DeleteSessionRequestComponent},
      {path: 'edit/:sessionId', component:UpdateSessionRequestComponent},
      {path: 'view/:sessionId', component: ViewSessionRequestComponent},
      {path: 'view/accepted/:sessionId', component: ListAcceptedRequestsComponent},
    ]
}, 

 
{path: 'vacancies',
children: [
  {path: '', component: ListVacanciesComponent},
  {path: 'list', component: ListVacanciesComponent},
  {path: 'delete/:vacancyId', component: DeleteVacanciesComponent},
  {path: 'view/:vacancyId', component: ViewVacancyComponent},
  {path: 'accept/:vacancyId', component: AcceptVacanciesComponent},
]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
