package tn.xypnos.rapidService.dto;

import java.sql.Date;
import java.util.List;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.xypnos.rapidService.entities.Feedback;
import tn.xypnos.rapidService.entities.User;
import tn.xypnos.rapidService.enums.Category;
import tn.xypnos.rapidService.enums.SubCategory;
import tn.xypnos.rapidService.services.UserService;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceDto {

	
private Long id;
	
	private String description;
	
	@Enumerated(EnumType.STRING)
	private Category category;
	
	@Enumerated(EnumType.STRING)
    private SubCategory subCategory;
	
	private Date creationDate;
	
	private String location;
	
	private int score;
	
	private UserDto userDto;
	
	private List<Feedback> feedbacks;

}
