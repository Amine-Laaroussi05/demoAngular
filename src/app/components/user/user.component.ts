import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  nom: string = "Laaroussi";
  prenom: string = "Amine";
  imageUrl: string = "https://thumbs.dreamstime.com/z/le-nombre-irrationnel-de-constante-math%C3%A9matique-symbole-pi-sur-cercle-lettre-grecque-127553115.jpg";
  job: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
