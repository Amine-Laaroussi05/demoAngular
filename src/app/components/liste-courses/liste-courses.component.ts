import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-courses',
  templateUrl: './liste-courses.component.html',
  styleUrls: ['./liste-courses.component.scss']
})
export class ListeCoursesComponent implements OnInit {

  articles: string[] = [];

  newArticle!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addArticle(): void{
    this.articles.push(this.newArticle);
    this.newArticle = '';
  }

  deleteArticle(index: number){
    this.articles.splice(index,1);
  }

}
