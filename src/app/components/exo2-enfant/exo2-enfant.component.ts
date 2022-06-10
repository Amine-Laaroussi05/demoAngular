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
  zone!:number;

  constructor() { }

  ngOnInit(): void {
  }

  time(n: number): Date{
    let d = new Date();
    d.setHours(d.getHours()+n);
    setTimeout(() => 1000);
    return d;
  }

}
