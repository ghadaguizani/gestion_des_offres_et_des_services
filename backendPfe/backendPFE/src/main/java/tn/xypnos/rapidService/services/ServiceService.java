package tn.xypnos.rapidService.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import tn.xypnos.rapidService.interfaces.interfaceService;
import tn.xypnos.rapidService.repositories.ServiceRepository;
import tn.xypnos.rapidService.entities.Serviceee;
import tn.xypnos.rapidService.enums.Category;
import tn.xypnos.rapidService.enums.SubCategory;

@Service
@Transactional
public class ServiceService implements interfaceService {

	private static final String ACTIVATION_EMAIL_SUBJECT = "Service activé";

	private static final String ACTIVATION_TEMPLATE = "activation_template";

	@Autowired
	private EmailService emailService;

	@Autowired
	private ServiceRepository serviceRepository;

	@Override
	public List<Serviceee> getAll() {

		return serviceRepository.findAll();
	}

	@Override
	public Serviceee getService(Long id) {

		return serviceRepository.findById(id).get();
	}

	@Override
	public void deleteService(Long id) {

		serviceRepository.deleteById(id);
	}

	@Override
	public Serviceee addService(Serviceee service) {

		return serviceRepository.save(service);
	}

	@Override
	public Serviceee updateService(Serviceee service) {

		return serviceRepository.save(service);
	}

	@Override
	public  List<Serviceee> getByCategory(Category category)
	{
		return serviceRepository.findByCategory(category);
	}

	@Override
	public List<Serviceee> getBySubCategory(SubCategory subCategory) {
		return serviceRepository.findBySubCategory(subCategory);
	}

	@Transactional
	public List<Serviceee> getServiceByKeyword(String keyword)
	{
		return serviceRepository.findByKeyword(keyword);
	}

	@Override
	public List<Serviceee> getByUser(Long id){

		return serviceRepository.findByUser(id);
	}

	@Override
	public List<Serviceee> getAllEnabled() {

		return serviceRepository.findAllEnabled() ;
	}

	@Override
	public List<Serviceee> getAllDisabled() {

		return serviceRepository.findAllDisabled() ;
	}

	@Override
	public void enableService(Long id, boolean enable) {

		Serviceee service =  serviceRepository.findById(id).get();
		service.setEnabled(enable);

		Map<String, Object> data = new HashMap<>();
		if(enable){
			data.put("firstName", service.getUser().getFirstName());
			data.put("description", getDescription(service.getDescription()));
			data.put("creationDate", service.getCreationDate());

			emailService.sendMessageUsingThymeleafTemplate(service.getUser().getMail(), ACTIVATION_EMAIL_SUBJECT, data, ACTIVATION_TEMPLATE);
		}
	}
	
	private String getDescription(String description){
		if(description.length() >= 50){
			return description.substring(0, 50);
		}else{
			return description.substring(0, description.length());
		}
	}
	
	@Override
	public Map<String,Long> countByCategory() {

		 return serviceRepository.countByCategory().stream()
	      .collect(Collectors.toMap(o -> String.valueOf(o[0]) , o -> Long.valueOf(o[1]+"") ));
	}



}
