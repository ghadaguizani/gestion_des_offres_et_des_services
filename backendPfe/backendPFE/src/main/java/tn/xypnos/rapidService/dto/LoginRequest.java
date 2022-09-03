package tn.xypnos.rapidService.dto;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class LoginRequest {

	@NotBlank
	private String mail;

	@NotBlank
	private String password;
}
