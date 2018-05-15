import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';

@Component({
    selector: 'app-changedetection-root',
    templateUrl: './changedetection-root.component.html'
})

export class ChangeDetectionRootComponent implements OnInit {
    profile1: Profile = new Profile('Thomas', 'Huysmans');
    profile2: Profile = new Profile('Jan', 'Peeters');
    constructor() { }

    ngOnInit() { }
}
