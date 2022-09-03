package tn.xypnos.rapidService.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.xypnos.rapidService.entities.Annonce;
import tn.xypnos.rapidService.entities.Serviceee;
import tn.xypnos.rapidService.enums.Category;
import tn.xypnos.rapidService.interfaces.InterfaceAnnonce;
import tn.xypnos.rapidService.repositories.AnnonceRepository;

@Service
@Transactional
public class AnnonceService implements InterfaceAnnonce {

	private static final String ACTIVATION_EMAIL_SUBJECT = "Annonce activée";

	private static final String ACTIVATION_Annonce_TEMPLATE = "activation_annonce_template";
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private AnnonceRepository annonceRepository;

	@Override
	public List<Annonce> getAll() {

		return annonceRepository.findAll();
	}

	@Override
	public Annonce getAnnonce(Long id) {

		return annonceRepository.findById(id).get();
	}

	@Override
	public Annonce addAnnonce(Annonce annonce) {

		return annonceRepository.save(annonce);
	}

	@Override
	public Annonce updateAnnonce(Annonce annonce) {

		return annonceRepository.save(annonce);
	}

	@Override
	public void deleteAnnonce(Long id) {

		annonceRepository.deleteById(id);		
	}
	
	@Override
	public List<Annonce> getByCategory(Category category)
	{
		return annonceRepository.findByCategory(category);
	}
	
	@Transactional
	public List<Annonce> getAnnonceByKeyword(String keyword)
	{
		return annonceRepository.findByKeyword(keyword)	;
	}

	@Override
	public List<Annonce> getByUser(Long id) {
	
		return annonceRepository.findByUser(id) ;
	}
	
	@Override
	public List<Annonce> getAllEnabled(){
		
		return annonceRepository.findAllEnabled();
	}
	
	@Override
	public List<Annonce> getAllDisabled(){
		
		return annonceRepository.findAllDisabled();
	}
	
	
	public void enableAnnonce(Long id, boolean enable) {

		Annonce annonce = annonceRepository.findById(id).get();
		System.out.println(annonce.isEnabled());
		annonce.setEnabled(enable);
		System.out.println(annonce.isEnabled());
		Map<String, Object> data = new HashMap<>();
		if(enable){
			data.put("firstName", annonce.getUser().getFirstName());
			data.put("description", getDescription(annonce.getDescription()));

			emailService.sendMessageUsingThymeleafTemplate(annonce.getUser().getMail(), ACTIVATION_EMAIL_SUBJECT, data, ACTIVATION_Annonce_TEMPLATE);
		}
	}
	
	private String getDescription(String description){
		if(description.length() >= 50){
			return description.substring(0, 50);
		}else{
			return description.substring(0, description.length());
		}
	}


}
