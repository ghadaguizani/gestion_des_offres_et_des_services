package tn.xypnos.rapidService.entities;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
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
import tn.xypnos.rapidService.dto.UserDto;
import tn.xypnos.rapidService.enums.Category;
import tn.xypnos.rapidService.enums.SubCategory;
@NoArgsConstructor
@SuperBuilder
@Data
@Entity
public class Serviceee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String description;
	
	@Enumerated(EnumType.STRING)
	private Category category;
	
	@Enumerated(EnumType.STRING)
    private SubCategory subCategory;
	
	private Date creationDate;
	
	private String location;
	
	private int score;
	
	private String picture;
	
	private boolean enabled;
	
	@JsonIgnoreProperties({ "services", "annonces" , "reclamations" , "roles","feedbacks"})
	@ManyToOne
	@JoinColumn( name = "user_id")
	private User user;
    

	@JsonIgnoreProperties({ "service"})
	@OneToMany(mappedBy="service")
	private List<Feedback> feedbacks;
    
}
