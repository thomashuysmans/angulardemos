
import { Injectable } from '@angular/core';
import { User } from './Model/user';

import { Http, Response } from '@angular/http';

@Injectable()
export class SimpleHttpService {

    constructor(private http: Http) {
    }

    getPersonName(): User {
        const user = new User('Thomas', 'Huysmans');
        return user;
    }

    getRequest(): any {
        return this.http.request('http://jsonplaceholder.typicode.com/posts/1')
           .subscribe( (data) => {
              return data.json();
           });
    }

    // makeRequest(): void {
    //     this.loading = true;
    //     this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    //       .map(res => res.json)
    //       .subscribe( (data) => {
    //         this.data = data;
    //         this.loading = false;
    //       });
    //   }
    //  makePost(): void {
    //     this.loading = true;
    //     this.http.post(
    //       'http://jsonplaceholder.typicode.com/posts',
    //       JSON.stringify({
    //         body: 'bar',
    //         title: 'foo',
    //         userId: 1
    //       }))
    //       .subscribe((res: Response) => {
    //         this.data = res.json();
    //         this.loading = false;
    //       });
    //   }
    //   makeDelete(): void {
    //     this.loading = true;
    //     this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
    //       .subscribe((res: Response) => {
    //         this.data = res.json();
    //         this.loading = false;
    //       });
    //   }
}
