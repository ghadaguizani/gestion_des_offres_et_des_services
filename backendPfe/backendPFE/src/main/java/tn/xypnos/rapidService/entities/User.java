package tn.xypnos.rapidService.entities;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
@NoArgsConstructor
@SuperBuilder
@Data
@Entity

public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String lastName;

	private String firstName;

	@JsonIgnore
	private String password;

	private String mail;

	private String phoneNumber;

	private String photoDeProfil;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
			joinColumns = @JoinColumn(name = "user_id"), 
			inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles;
	
	private boolean enabled;
	
   
	@OneToMany(mappedBy="user")
	private List<Serviceee> services; 
    
 	@OneToMany(mappedBy="user")
 	private List<Annonce> annonces;
    
	@OneToMany(mappedBy="user")
	private List<Feedback> feedbacks;



    
	public User(String lastName, String firstName, String password, String mail, String phoneNumber, String photoDeProfil) {
		super();
		this.lastName = lastName;
		this.firstName = firstName;
		this.password = password;
		this.mail = mail;
		this.phoneNumber = phoneNumber;
		this.photoDeProfil = photoDeProfil;
	}
	
	
	public User(Long id, String lastName, String firstName, String mail, String phoneNumber, String photoDeProfil,
			Set<Role> roles, boolean enabled, List<Serviceee> services, List<Annonce> annonces,
			List<Feedback> feedbacks) {
		super();
		this.id = id;
		this.lastName = lastName;
		this.firstName = firstName;
		this.mail = mail;
		this.phoneNumber = phoneNumber;
		this.photoDeProfil = photoDeProfil;
		this.roles = roles;
		this.enabled = enabled;
		this.services = services;
		this.annonces = annonces;
		this.feedbacks = feedbacks;
	}
    
    

}

