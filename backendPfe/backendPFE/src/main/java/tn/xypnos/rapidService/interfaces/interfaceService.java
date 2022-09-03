package tn.xypnos.rapidService.interfaces;

import org.springframework.stereotype.Service;

import tn.xypnos.rapidService.entities.Serviceee;
import tn.xypnos.rapidService.enums.Category;
import tn.xypnos.rapidService.enums.SubCategory;

import java.util.List;
import java.util.Map;
@Service
public interface interfaceService {
	
	
	 Serviceee getService(Long id);
	
	 void deleteService(Long id);
	
	 Serviceee addService(Serviceee service);
	
	 Serviceee updateService (Serviceee service);

	 List<Serviceee> getByCategory(Category category);
	 
	 List<Serviceee> getBySubCategory(SubCategory subCategory);

	 List<Serviceee> getAll();
	 
	 List<Serviceee> getByUser(Long id);
	 
	 List<Serviceee> getAllEnabled();
	 
	 List<Serviceee> getAllDisabled();
	 
	 void enableService(Long id, boolean enable);

	Map<String, Long> countByCategory();
	 
	 
	
		
}
