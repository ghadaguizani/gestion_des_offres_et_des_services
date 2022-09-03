package tn.xypnos.rapidService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.xypnos.rapidService.entities.Annonce;
import tn.xypnos.rapidService.entities.Feedback;
import tn.xypnos.rapidService.services.FeedbackService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FeedbackController {
	
	@Autowired
	private FeedbackService feedbackService;
	
	@GetMapping("/feedbacks")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Feedback> getAllFeedback(){
		
		return feedbackService.getAllFeedback();
	}
	
	@PostMapping("/add-feedback")
	public Feedback addFeedback(@RequestBody Feedback feedback){
		
		return feedbackService.addFeedback(feedback);
	}
	
	@PostMapping("/update-feedback")
	@CrossOrigin(origins = "http://localhost:4200")
	public Feedback updateFeedback(@RequestBody Feedback feedback){
		
		return feedbackService.updateFeedback(feedback);
	}
	
	@DeleteMapping("/deleteFeedback/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteFeedback(@PathVariable Long id)
	{
		feedbackService.deleteFeedback(id);
	}
	
	
}
