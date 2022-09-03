package tn.xypnos.rapidService.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.ToString;


@ToString
@Data
public class SignupRequest {

	@NotBlank
    @Size(min = 3, max = 20)
    private String firstName;
	
	@NotBlank
    @Size(min = 3, max = 20)
    private String lastName;
 
    @NotBlank
    @Size(max = 50)
    @Email
    private String mail;
    
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
    
    private String phoneNumber;
    
    private String fileName;
}
