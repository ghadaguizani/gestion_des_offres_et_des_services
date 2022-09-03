import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient : HttpClient) { }

  addMessage(newMessage : Message){
    
    const headers = { 'content-type' : 'application/json'};
    const body = JSON.stringify(newMessage);
    this.httpClient.post<any>("http://localhost:8093/addMessage",body,{'headers':headers}).subscribe(data=>{
      data.id;
    })
  }

  getAllMessage():Observable<any>{
    return this.httpClient.get("http://localhost:8093/messages");
  }
  
}
 