package tn.xypnos.rapidService.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.xypnos.rapidService.entities.Feedback;
import tn.xypnos.rapidService.interfaces.InterfaceFeedback;
import tn.xypnos.rapidService.repositories.FeedbackRepository;
@Service
public class FeedbackService implements InterfaceFeedback {

	@Autowired
	private FeedbackRepository feedbackRpository;

	@Override
	public List<Feedback> getAllFeedback() {
		
		return feedbackRpository.findAll() ;
	}
	
	@Override
	public Feedback addFeedback(Feedback feedback) {

		return feedbackRpository.save(feedback);
	}

	@Override
	public Feedback updateFeedback(Feedback feedback) {
		
		return feedbackRpository.save(feedback);
	}

	@Override
	public void deleteFeedback(Long id) {

		feedbackRpository.deleteById(id);
	}

	

	
	
	
	
}
