package tn.xypnos.rapidService.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.xypnos.rapidService.entities.Message;
import tn.xypnos.rapidService.interfaces.InterfaceMessage;
import tn.xypnos.rapidService.repositories.MessageRepository;

@Service
public class MessageService implements InterfaceMessage  {

	@Autowired
	private MessageRepository messageRepository;
	
	@Override
	public Message addMessage(Message message) {
		
		return messageRepository.save(message);
	}

	@Override
	public List<Message> getAllMessage() {
		
		return messageRepository.findAll() ;
	}

	@Override
	public Message getMessage(Long id) {
		
		return messageRepository.getById(id) ;
	}

	@Override
	public Message updateMessage(Message message) {
		
		return messageRepository.save(message);
	}
	
	

}
