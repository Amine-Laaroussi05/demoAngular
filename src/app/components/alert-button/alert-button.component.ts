import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    alert("On t'a dit de pas cliquer, c******! <3")
  }

}
