import { Pipe, PipeTransform } from '@angular/core';
import { Http, Response } from '@angular/http';

@Pipe({
  name: 'contactsAsync',
  pure: false

})
export class ContactsAsyncPipe implements PipeTransform {
  private prevUrl = '';
  private fetchedData: any = null;

  constructor(private _http: Http) {}

  transform(url: string): any {
    if (url !== this.prevUrl) {
      this.prevUrl = url;
      this.fetchedData = null;
      this._http.get(url)
      .map(result => this.extractData(result))
      .subscribe( result => this.fetchedData = result, error => this.errorHandling(error));
    }
    return this.fetchedData;
  }

  private extractData(response: Response){
    const body = response.json();
    return body.data || {};
  }

  private errorHandling(error: any ){
    console.log(error);
  }
}
