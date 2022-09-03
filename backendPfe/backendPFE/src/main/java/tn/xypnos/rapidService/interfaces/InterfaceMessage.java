package tn.xypnos.rapidService.interfaces;

import java.util.List;

import org.springframework.stereotype.Service;

import tn.xypnos.rapidService.entities.Message;

@Service
public interface InterfaceMessage {

	Message addMessage(Message message);
	
	List<Message> getAllMessage();
	
	Message getMessage(Long id);
	
	Message updateMessage(Message message);
	
}
