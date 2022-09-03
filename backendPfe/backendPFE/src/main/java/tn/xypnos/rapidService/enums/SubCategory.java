package tn.xypnos.rapidService.enums;

import lombok.Getter;

@Getter
public enum SubCategory {
	ELECTRICITE("electricité"),
	PLOMBERIE("plomberie"),
	AUTRES("autres");
	private String value;
	 SubCategory(String value)
	{
		this.value=value;
	}
}
