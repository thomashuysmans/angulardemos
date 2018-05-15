import { Injectable, Inject } from '@angular/core';


export const API_URL: string = "http://www.google.com";

// TODO: nakijken in consumed-in waarom het daar wel werkt

@Injectable()
export class MyService {

    constructor(@Inject(API_URL) private apiUrl: string) {

    }

    getValue(): string {
        return 'The API URL:' + this.apiUrl;
    }
}