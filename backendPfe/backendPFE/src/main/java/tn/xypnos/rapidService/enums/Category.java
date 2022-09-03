package tn.xypnos.rapidService.enums;

import lombok.Getter;

@Getter
public enum Category {
	BRICOLAGE("bricolage"),
	JARDINAGE("jardinage"),
	DEMENAGEMENT("déménagement"),
	MENAGE("ménage"),
	AIDE_A_DOMICILE("aide à domicile"),
	SERVICES_GENERAUX("services géneraux");
	

	private String value;
	
	private Category(String value){
		this.value = value;
	}
	
}
