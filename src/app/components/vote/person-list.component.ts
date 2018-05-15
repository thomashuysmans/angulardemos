import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Person } from './person';

@Component({
    selector: 'person-list',
    templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
    
    @Input() persons:Person[];
    @Output() onVote = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { }

    doVote(){
        this.onVote.emit(1);
    }
}