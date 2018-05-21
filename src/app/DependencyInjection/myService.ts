import { Injectable, Inject } from '@angular/core';


@Injectable()
export class MyService {

    constructor(@Inject('MyApiUrl') private apiUrl: string) {
    }

    getValue(): string {
        return 'The API URL:' + this.apiUrl;
    }
}