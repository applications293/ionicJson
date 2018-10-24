import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiDataProvider {
  data;
  constructor(public http: HttpClient) {
    console.log('Service Provider loaded');
  }

  getRemoteData() {
    return this.data =  this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot');
       console.log(this.data);
     };

}
