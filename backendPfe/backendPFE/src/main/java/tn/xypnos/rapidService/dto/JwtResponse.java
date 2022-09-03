package tn.xypnos.rapidService.dto;

import java.util.List;

import lombok.Data;

@Data
public class JwtResponse {

	private String accessToken;
	private String type = "Bearer";
	private Long id;
	private String firstName;
	private String lastName;
	private String mail;
	private String phoneNumber;
	private List<String> roles;
	private boolean enabled;
	private String photoDeProfil;
	
	public JwtResponse(String accessToken, Long id, String firstName, String lastName, String mail, String phoneNumber,
			List<String> roles, boolean enabled, String photoDeProfil) {
		super();
		this.accessToken = accessToken;
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mail = mail;
		this.phoneNumber = phoneNumber;
		this.roles = roles;
		this.enabled = enabled;
		this.photoDeProfil = photoDeProfil;
	}


	


}
