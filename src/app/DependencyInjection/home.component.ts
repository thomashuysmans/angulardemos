import { Component, ReflectiveInjector  } from '@angular/core';
import { MyService } from './myService';

@Component({
    selector: 'home',
    template: '<button (click)="invokeMyService()">Get Value</button>'
})
export class HomeComponent {
    myService: MyService;

    constructor() {
        // Registers the service with our Dependency Injection Container
        const injector = ReflectiveInjector.resolveAndCreate(([MyService]));
        // Resolves our MyService
        this.myService = injector.get(MyService);
    }

    invokeMyService(): void {
        console.log('MyService return value: ' + this.myService.getValue());
    }
}