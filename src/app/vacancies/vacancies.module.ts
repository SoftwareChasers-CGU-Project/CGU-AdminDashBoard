import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewVacancyComponent } from './view-vacancy/view-vacancy.component';
import { DeleteVacanciesComponent } from './delete-vacancies/delete-vacancies.component';
import { AcceptVacanciesComponent } from './accept-vacancies/accept-vacancies.component';
import { ListVacanciesComponent } from './list-vacancies/list-vacancies.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListCvComponent } from './list-cv/list-cv.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SendEmailsComponent } from './send-emails/send-emails.component';
import { DeleteAcceptedvacanciesComponent } from './delete-acceptedvacancies/delete-acceptedvacancies.component';


@NgModule({
  declarations: [ 
    ViewVacancyComponent,
    ListVacanciesComponent,
    DeleteVacanciesComponent,
    AcceptVacanciesComponent,
    ListCvComponent,
    SendEmailsComponent,
    DeleteAcceptedvacanciesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class VacanciesModule { } 
