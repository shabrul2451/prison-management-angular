import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {

  constructor(private httpService: HttpClient) { }
  ApiUrl = 'https://jsonplaceholder.typicode.com/users';
  // @ts-ignore
  getStuffs(): Observable<any>{

    return this.httpService.get(this.ApiUrl);
  }
  delStuff(id: any): Observable<any> {
    console.log(this.ApiUrl + '/' + id);
    return this.httpService.delete(this.ApiUrl + '/' + id);
  }
}
