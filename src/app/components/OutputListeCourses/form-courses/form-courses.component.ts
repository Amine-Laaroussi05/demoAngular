import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-courses',
  templateUrl: './form-courses.component.html',
  styleUrls: ['./form-courses.component.scss']
})
export class FormCoursesComponent implements OnInit {

  @Output()
  onAddArticle: EventEmitter<any> = new EventEmitter();

  article: FormGroup = this.formBuilder.group({
    designation: ['', Validators.required],
    prix: ['', Validators.required]
  })

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  private resetForm(){
    this.article.reset();
    this.submitted = false;
  }

  public onSubmit(){
    this.submitted = true;

    if(this.article.valid){
      this.onAddArticle.emit(this.article.value);
      this.resetForm();
    } else{
      throw new Error('Invalide')
    }
  }

  get form() {
    return this.article.controls;
  }

}
