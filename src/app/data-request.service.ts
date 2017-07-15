import { Injectable,EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataRequestService {

  constructor(public http:Http) { }

  getData(){
      return this.http.get('http://jsonplaceholder.typicode.com/users/1').map(data => data.json());
    }
    getPost() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1').map(data => data.json());
  }

}
