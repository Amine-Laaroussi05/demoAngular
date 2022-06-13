import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2-parent',
  templateUrl: './exo2-parent.component.html',
  styleUrls: ['./exo2-parent.component.scss']
})
export class Exo2ParentComponent implements OnInit {

  timeZones: string[] = [
      'Europe/Paris', 'America/New_York', 'Europe/Amsterdam']




  constructor() { }

  ngOnInit(): void {
  }

  time(timezone: string): string{
    let date = new Date().toLocaleString("fr-FR", {timeZone: timezone});
    date.split(' ')[1];
    setInterval(() => 1000);
    return date;
  }
}
