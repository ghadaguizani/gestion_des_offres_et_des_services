package tn.xypnos.rapidService.interfaces;

import java.util.List;

import org.springframework.stereotype.Service;

import tn.xypnos.rapidService.entities.Annonce;
import tn.xypnos.rapidService.entities.Serviceee;
import tn.xypnos.rapidService.enums.Category;
@Service
public interface InterfaceAnnonce {

	List<Annonce> getAll();
	
	Annonce getAnnonce(Long id);
	
	Annonce addAnnonce(Annonce annonce);
	
	Annonce updateAnnonce(Annonce annonce);
	
	void deleteAnnonce(Long id);

	List<Annonce> getByCategory(Category category);
	
	List<Annonce> getByUser(Long id);
	
	List<Annonce> getAllEnabled();
	
	List<Annonce> getAllDisabled();
	
	void enableAnnonce(Long id, boolean enabled);

	
}
