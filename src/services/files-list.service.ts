import { CommonClass } from './../common/common-url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesListService {
  commonUrl=CommonClass.commonUrl;

    private url=this.commonUrl+'/files/5df8a5eda13a33484c1758e5';
    constructor(private http: HttpClient) { 
  
    }
    getFiles(){
      return this.http.get(this.url);
    }
    // createPost(post){
    //   return this.http.post(this.url,JSON.stringify(post))
    // }
    // updateFile(id){
    //   // console.log('this is the id :'+id)
    //   return this.http.patch(this.url+'/'+id,JSON.stringify({isRead:true}))
    // }
    // deleteFile(id){
    //   return  this.http.delete(this.url+'/'+id);
    // }
}
