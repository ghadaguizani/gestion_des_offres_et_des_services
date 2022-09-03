package tn.xypnos.rapidService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.xypnos.rapidService.entities.Message;
import tn.xypnos.rapidService.entities.Serviceee;
import tn.xypnos.rapidService.services.MessageService;

@RestController
public class MessageController {

	@Autowired
	private MessageService messageService;
	
	@GetMapping("/messages")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Message> getAllMessage()
	{
		return messageService.getAllMessage();
	}
	
	@PostMapping("/addMessage")
	@CrossOrigin(origins = "http://localhost:4200")
	public Message addMessage(@RequestBody Message message){
		
		return messageService.addMessage(message);
	}
	
	@GetMapping("/message/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Message getMessage(@PathVariable("id") Long id){
		return messageService.getMessage(id);
	}

}
