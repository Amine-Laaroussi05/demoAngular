import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-filtre',
  templateUrl: './liste-filtre.component.html',
  styleUrls: ['./liste-filtre.component.scss']
})
export class ListeFiltreComponent implements OnInit {

  items: string[] = ['Saul Hudson', 'David Bowie', 'Steve Nicks', 'Jimi Hendrix', 'Johnny Halliday'];

  constructor() { }

  ngOnInit(): void {
  }

}
