import { CommonClass } from './../common/common-url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuscribersListService {
  commonUrl=CommonClass.commonUrl;
  private url=this.commonUrl+'/subscribers/5df8a5eda13a33484c1758e5';
  constructor(private http: HttpClient) { }
  getSuscribers(){
    return this.http.get(this.url);
  }
}
