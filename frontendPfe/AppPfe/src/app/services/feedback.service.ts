import { Injectable } from '@angular/core';
import { Feedback } from '../model/feedback';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient : HttpClient) { }

  addFeedback(newFeedback : Feedback){
    
    const headers = {'content-type' : 'application/json'};
    const body = JSON.stringify(newFeedback);
    return this.httpClient.post<any>("http://localhost:8093/add-feedback",body,{'headers':headers}).subscribe(data =>{
      data.id;
    })
  }

  deleteFeedback(id:any):Observable<any>
  {
    let url='http://localhost:8093/deleteFeedback/';
    let baseurl=url.concat(id.toString());
    return this.httpClient.delete(baseurl);
  }


}
