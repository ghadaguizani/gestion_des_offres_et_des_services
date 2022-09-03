package tn.xypnos.rapidService.security;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import tn.xypnos.rapidService.entities.User;

@AllArgsConstructor
@Data
public class UserDetailsImpl implements UserDetails {

	private static final long serialVersionUID = -861480772854132746L;
	private Long id;
	private String firstName;
	private String lastName;
    private String phoneNumber;
	private String mail;
	
	@JsonIgnore
	private String password;
	private Collection<? extends GrantedAuthority> authorities;
	private boolean enabled;
	private String photoDeProfil;
	
	public static UserDetailsImpl build(User user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name()))
				.collect(Collectors.toList());
		return new UserDetailsImpl(
				user.getId(),
				user.getFirstName(), 
				user.getLastName(), 
				user.getPhoneNumber(), 
				user.getMail(),
				user.getPassword(), 
				authorities,
				user.isEnabled(),
				user.getPhotoDeProfil()
				);
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}
	
	
	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return mail;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return enabled;
	}

}
