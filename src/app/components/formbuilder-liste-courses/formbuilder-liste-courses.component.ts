import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { groupBy } from 'rxjs';

@Component({
  selector: 'app-formbuilder-liste-courses',
  templateUrl: './formbuilder-liste-courses.component.html',
  styleUrls: ['./formbuilder-liste-courses.component.scss']
})
export class FormbuilderListeCoursesComponent implements OnInit {

  article: FormGroup = this.formBuilder.group({
    designation: ['', Validators.required],
    prix: ['', Validators.required]

  });

  articles: any[] = [];

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
   }

   get totalPrice(): number{
     return this.articles.reduce((total,article) => total + article.prix,0);
   }

   get form(){
     return this.article.controls;
   }

  ngOnInit(): void {
  }

  private addArticle(){
    this.articles.push(this.article.value);
    this.article.reset();
    this.submitted = false;
}

public onSubmit(): boolean{
  this.submitted = true;

  if(this.article.invalid){
    return false;
  } else{
    this.addArticle();
    return true;
  }
}

}
