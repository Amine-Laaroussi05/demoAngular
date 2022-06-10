import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  items: string[] = [
    "Carlos", "Johnny Haliday", "Michel Polnareff"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
