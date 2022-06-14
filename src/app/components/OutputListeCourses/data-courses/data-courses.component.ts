import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-courses',
  templateUrl: './data-courses.component.html',
  styleUrls: ['./data-courses.component.scss']
})
export class DataCoursesComponent implements OnInit {

  courses: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addArticle(article: any){
    this.courses.push(article);
  }

  get total(){
    return this.courses.reduce((total, current) => total + current.prix,0);
  }

}
