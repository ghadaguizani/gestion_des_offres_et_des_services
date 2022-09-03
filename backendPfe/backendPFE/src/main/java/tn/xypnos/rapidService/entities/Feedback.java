package tn.xypnos.rapidService.entities;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
@NoArgsConstructor
@SuperBuilder
@Data
@Entity
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String message;
	
	private Date creationDate;
	
   
	@JsonIgnoreProperties({ "services", "annonces" , "feedbacks" , "reclamations" , "roles"})
	@ManyToOne
	@JoinColumn( name = "user_id")
	private User user;
	
	
	@JsonIgnoreProperties({ "user","feedbacks"})
	@ManyToOne
	@JoinColumn( name = "service_id")
	private Serviceee service;
	

	
}
