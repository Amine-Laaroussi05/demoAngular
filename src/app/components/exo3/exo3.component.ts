import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  infosUtilisateur: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.minLength(2), Validators.required]],
    prenom: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    entreprise: ['', [Validators.minLength(2), Validators.required]],
    telephone: ['', [Validators.minLength(10), Validators.required]]
  })



  infosUtilisateurs: any[] = [];

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.infosUtilisateurs.push({
      nom: 'LAAROUSSI',
      prenom: 'Amine',
      email: 'laaroussi.amine@yandex.com',
      entreprise: 'Lille',
      telephone: '0123456789'
    })
  }

  get form(){
    return this.infosUtilisateur.controls;
  }

  private addUtilisateur(){
    this.infosUtilisateurs.push(this.infosUtilisateur.value);
    this.infosUtilisateur.reset();
    this.submitted = false;
  }

  public onSubmit(): boolean {
    this.submitted = true;

    if(this.infosUtilisateur.invalid){
      return false;
    } else{
      this.addUtilisateur();
      return true;
    }
  }

}
