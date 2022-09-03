package tn.xypnos.rapidService.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import tn.xypnos.rapidService.dto.MessageResponse;
import tn.xypnos.rapidService.entities.Annonce;
import tn.xypnos.rapidService.entities.Serviceee;
import tn.xypnos.rapidService.repositories.ServiceRepository;
import tn.xypnos.rapidService.services.AnnonceService;
import tn.xypnos.rapidService.services.ServiceService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/admin")
@Data
@Slf4j
public class AdminController {
	
	@Autowired
	private ServiceService serviceService;
	
	@Autowired
	private AnnonceService annonceService;
	
	@GetMapping("/service/{id}")
	public Serviceee getService(@PathVariable("id") Long id){
		
		return serviceService.getService(id);
	}
	
	@PostMapping("/add-service")
	public Serviceee addService(@RequestBody Serviceee servicee){
		
			return serviceService.addService(servicee);
	}
	
	@GetMapping("/enabledServices")
	public List<Serviceee> getAllEnabledServices(){
		return serviceService.getAllEnabled();
	}
	
	@GetMapping("/disabledServices")
	public List<Serviceee> getAllDisabledServices(){
		return serviceService.getAllDisabled();
	}
	
	@GetMapping("/enabledAnnonces")
	public List<Annonce> getAllEnabledAnnonces(){
		return annonceService.getAllEnabled();
	}
	
	@GetMapping("/disabledAnnonces")
	public List<Annonce> getAllDisabledAnnonces(){
		return annonceService.getAllDisabled();
	}
	
	@GetMapping("/stat/category")
	public Map<String,Long> countByCategory(){
		return serviceService.countByCategory();
	}

	@PostMapping("/enableService/{id}")
	public ResponseEntity<?> enableService(@PathVariable Long id){
		
		try {
			serviceService.enableService(id, true);
			
			return ResponseEntity.ok(new MessageResponse("Service enabled successfully"));
		} catch(Exception e) {
			log.error("An error has occured", e);
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse(e.getMessage()));
		}
		
		
	}
	
	@PostMapping("/disableService/{id}")
	public ResponseEntity<?> disableService(@PathVariable Long id){
		
		try {
			serviceService.enableService(id, false);
			
			return ResponseEntity.ok(new MessageResponse("Service disabled successfully"));
		} catch(Exception e) {
			log.error("An error has occured", e);
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse(e.getMessage()));
		}
	
	}
	
	@PostMapping("/enableAnnonce/{id}")
	public ResponseEntity<?> enableAnnonce(@PathVariable Long id){
		
		try {
			annonceService.enableAnnonce(id, true);
			
			return ResponseEntity.ok(new MessageResponse("Annonce enabled successfully"));
		} catch(Exception e) {
			log.error("An error has occured", e);
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse(e.getMessage()));
		}
		
		
	}
	
	@PostMapping("/disableAnnonce/{id}")
	public ResponseEntity<?> disableAnnonce(@PathVariable Long id){
		
		try {
			annonceService.enableAnnonce(id, false);
			return ResponseEntity.ok(new MessageResponse("Annonce disabled successfully"));
		} catch(Exception e) {
			log.error("An error has occured", e);
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse(e.getMessage()));
		}
	
	}
}
