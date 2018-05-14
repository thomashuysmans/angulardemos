import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-home',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {

  dateOfToday: Date;
  amount: Number;

  constructor() { }

  ngOnInit() {
    this.dateOfToday = new Date();
    this.amount = 1145.55;
  }

}
