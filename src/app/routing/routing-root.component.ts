import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-routing-root',
    templateUrl: 'routing-root.component.html'
})

export class RoutingRootComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    goToProduct(id:string): void {
      this.router.navigate(['product/', id], {relativeTo: this.route});
    }

    ngOnInit() { }
}
