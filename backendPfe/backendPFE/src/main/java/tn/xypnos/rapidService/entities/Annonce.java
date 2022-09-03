package tn.xypnos.rapidService.entities;
import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import tn.xypnos.rapidService.enums.Category;
import tn.xypnos.rapidService.enums.SubCategory;

@NoArgsConstructor
@SuperBuilder
@Data
@Entity
public class Annonce {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Enumerated(EnumType.STRING)
	private Category category;

	@Enumerated(EnumType.STRING)
    private SubCategory subCategory;
	
	private String description;

	private Date creationDate;

    private String location;
    
    private boolean enabled;
    
	    @JsonIgnoreProperties({ "services", "annonces" , "feedbacks" , "reclamations" , "roles"})
		@ManyToOne
		@JoinColumn( name = "user_id")
		private User user;
	    
	   
}
