package tn.xypnos.rapidService.interfaces;

import java.util.List;

import org.springframework.stereotype.Service;

import tn.xypnos.rapidService.entities.Feedback;

@Service
public interface InterfaceFeedback {
	
	List<Feedback> getAllFeedback();
	
	Feedback addFeedback(Feedback feedback);
	
	Feedback updateFeedback(Feedback feedback);
	
	void deleteFeedback(Long id);
	
	
	}
