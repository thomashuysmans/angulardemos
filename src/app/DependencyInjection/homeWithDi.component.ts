import { Component, ReflectiveInjector  } from '@angular/core';
import { MyService } from './myService';

@Component({
    selector: 'home-with-di',
    template: `<button (click)="invokeMyService()">Get Value</button>`
})
export class HomeWithDiComponent {
    constructor(private myService: MyService){
    }

    invokeMyService(): void {
        console.log('MyService return value: ' + this.myService.getValue());
    }
}