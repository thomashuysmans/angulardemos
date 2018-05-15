import { Component, OnInit } from '@angular/core';

import { Person } from './person';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html'
})
export class VoteComponent implements OnInit {

  persons : Person[];
  totalVotes = 0;
  constructor() { }

  ngOnInit() {
   this.persons = [
      { Firstname: "Tom", Lastname: "Huysmans" },
      { Firstname: "Sven", Lastname: "Pieters" },
      { Firstname: "Linda", Lastname: "Moerenhout" }
      ];
  }

  onVoted(vote: number){
    this.totalVotes = this.totalVotes + vote;
  }

  // doVote(){
  //   this.totalVotes = this.totalVotes + 1;
  // }
}
