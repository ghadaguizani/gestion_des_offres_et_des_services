package tn.xypnos.rapidService.dto;
import java.util.List;
import java.util.Set;

import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
import tn.xypnos.rapidService.entities.Annonce;
import tn.xypnos.rapidService.entities.Feedback;
import tn.xypnos.rapidService.entities.Role;
import tn.xypnos.rapidService.entities.Serviceee;


@Data
public class UserDto {

	private Long id;

	private String lastName;

	private String firstName;

	private String mail;

	private String phoneNumber;
	
	private String photoDeProfil;

	private boolean enabled;
	
	private Set<Role> roles;

	private List<Serviceee> services;
    
 	private List<Annonce> annonces;
    
	private List<Feedback> feedbacks;

	

}
