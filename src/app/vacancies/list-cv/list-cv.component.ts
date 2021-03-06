import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.scss']
})
export class ListCvComponent implements OnInit {
  listLinks : any = [];
  p: number=1;
  
  constructor(private VacancyService : VacancyService) { }

  ngOnInit(): void {
    this.VacancyService. listLinks().subscribe(data =>{
      this.listLinks = data as String[];
    },
    (err) => {
      alert("An error occurred")
    });
  }
 }
