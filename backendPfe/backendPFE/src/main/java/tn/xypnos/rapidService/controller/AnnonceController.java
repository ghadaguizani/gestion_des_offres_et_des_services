package tn.xypnos.rapidService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
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
import tn.xypnos.rapidService.security.UserDetailsImpl;
import tn.xypnos.rapidService.services.AnnonceService;

@RestController
public class AnnonceController {
	
	@Autowired
	private AnnonceService annonceService;
	
	@GetMapping("/annonces")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Annonce> getAllAnnonce()
	{
		return annonceService.getAllEnabled();
	}
	
	
	@GetMapping("/annoncesByKeyword")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Annonce> getByKeyword(@RequestParam(value="keyword") String keyword)
	{
		return annonceService.getAnnonceByKeyword(keyword.toLowerCase());
	}
	
	
	@GetMapping("/annonce/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Annonce getAnnonce(@PathVariable Long id)
	{
		return annonceService.getAnnonce(id);
	}
	
	
	//@PostMapping(value="/add-annonce",produces = MediaType.APPLICATION_JSON_VALUE)
	@PostMapping("/add-annonce")
	@CrossOrigin(origins = "http://localhost:4200")
    public Annonce addAnnonce(@RequestBody Annonce annonce)
    {
    	return annonceService.addAnnonce(annonce);
    }
    
	
	@PostMapping("/update-annonce")
	@CrossOrigin(origins = "http://localhost:4200")
    public Annonce updateAnnonce(@RequestBody Annonce annonce)
    {
    	return annonceService.addAnnonce(annonce);
    }
	
	
	@DeleteMapping("/annonce/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteAnnonce(@PathVariable Long id)
	{
		annonceService.deleteAnnonce(id);
	}
	
	@GetMapping("/annoncesByUserId")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Annonce> getAnnoncesByUserId(){
		
		UserDetailsImpl u= (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Long id = u.getId();
		return annonceService.getByUser(id);
		
	}
}

