import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2-parent',
  templateUrl: './exo2-parent.component.html',
  styleUrls: ['./exo2-parent.component.scss']
})
export class Exo2ParentComponent implements OnInit {

  villesTimes: any = [
    {
      ville: 'Paris',
      time: 0,
    },
    {
      ville: 'New York',
      time: -6,
    },
    {
      ville: 'Amsterdam',
      time:0
    },
    {
      ville: 'Tokyo',
      time: 7,
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

  time(zone: number): Date{
    let date = new Date();
    date.setHours(date.getHours()+ zone);
    setInterval(() => 1000);
    return date;
  }
}
