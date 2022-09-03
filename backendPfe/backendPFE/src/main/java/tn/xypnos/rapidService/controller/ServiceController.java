package tn.xypnos.rapidService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tn.xypnos.rapidService.entities.Annonce;
import tn.xypnos.rapidService.entities.Serviceee;
import tn.xypnos.rapidService.enums.Category;
import tn.xypnos.rapidService.enums.SubCategory;
import tn.xypnos.rapidService.security.UserDetailsImpl;
import tn.xypnos.rapidService.services.ServiceService;

@RestController
public class ServiceController{
	
	@Autowired
	private ServiceService service;
	
	@Autowired
	private  PasswordEncoder encoder;
	
	@GetMapping("/services")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Serviceee> getAllService()
	{
		return service.getAll();
	}
	
	@GetMapping("/serviceByCategory")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Serviceee> getByCategory(@RequestParam("category") Category category)
	{
		//System.out.println(encoder.encode("abcdefghi")); 
		return service.getByCategory(category);
	}
	
	@GetMapping("/serviceBySubCategory")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Serviceee> getBysubCategory(@RequestParam("subCategory") SubCategory subCategory)
	{
		return service.getBySubCategory(subCategory);
	}
	
	@PostMapping("/add-service")
	@CrossOrigin(origins = "http://localhost:4200")
	public Serviceee addService(@RequestBody Serviceee servicee){
		
			return service.addService(servicee);
	}
	
	@GetMapping("/service/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Serviceee getService(@PathVariable("id") Long id){
		
		return service.getService(id);
	}
	
	@GetMapping("/servicesByUserId")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Serviceee> getServicesByUserId(){
		
		UserDetailsImpl u= (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Long id = u.getId();
		return service.getByUser(id);
		
	}
	
	@DeleteMapping("/service/{id}")
	@CrossOrigin(origins = "*")
	public void deleteService(@PathVariable Long id)
	{
		service.deleteService(id);
	}
	
	@PostMapping("/updateService")
	@CrossOrigin(origins = "http://localhost:4200")
	public Serviceee updateService(@RequestBody Serviceee servicee){
		
		return service.updateService(servicee);
	}
	
	@GetMapping("/servicesByKeyword")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Serviceee> getByKeyword(@RequestParam(value="keyword") String keyword)
	{
		return service.getServiceByKeyword(keyword.toLowerCase());
	}
	
	

	
	
	
}