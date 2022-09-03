import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages : Message[] = [];
  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
    this.messageService.getAllMessage().subscribe(resp=>{
      this.messages = Object.values(resp);
      console.log(this.messages); 
    })
  }

}
