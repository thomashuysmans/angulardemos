import {Component} from '@angular/core';
import { Http, Response } from '@angular/http';

import { SimpleHttpService } from '../simpleHttp.service';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'simple-http',
  templateUrl: 'simplehttp.component.html'
})
export class SimpleHTTPComponent {
  data: Object;

  data2: Object;
  loading: boolean;

  constructor(private http: Http, private simpleHttpService: SimpleHttpService, private httpClient: HttpClient) {
  }

  makeRequest2() {
    this.loading = true;
    this.data = this.simpleHttpService.getRequest().subscribe( (res: Response) => {
      this.data = res.json();
      this.loading = false;
   });
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe(  (res: Response) => {
        this.data = res.json();
        this.loading = false;
      });


     this.httpClient.get('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe( (data: any) => {
        this.data2 = data;
        this.loading = false;
      });
  }

 makePost(): void {
    this.loading = true;
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }))
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  makeDelete(): void {
    this.loading = true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}

  //, private simpleHttpService: SimpleHttpService
  // makeRequest(): void {
  //   this.loading = true;
  //   this.http.request('http://jsonplaceholder.typicode.com/posts/1')
  //     .subscribe((res: Response) => {
  //       this.data = res.json();
  //       this.loading = false;
  //     });
  // }