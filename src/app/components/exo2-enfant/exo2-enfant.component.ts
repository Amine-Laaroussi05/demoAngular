import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2-enfant',
  templateUrl: './exo2-enfant.component.html',
  styleUrls: ['./exo2-enfant.component.scss']
})
export class Exo2EnfantComponent implements OnInit {

  @Input()
  ville!:string;

  @Input()
  time!:Date;

  constructor() { }

  ngOnInit(): void {
  }

}
