package tn.xypnos.rapidService.security.filter;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.util.StringUtils;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.xypnos.rapidService.dto.JwtResponse;
import tn.xypnos.rapidService.dto.LoginRequest;
import tn.xypnos.rapidService.jwt.JwtUtils;
import tn.xypnos.rapidService.security.UserDetailsImpl;

@Slf4j
@RequiredArgsConstructor
public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private final AuthenticationManager authenticationManager;

	private final JwtUtils jwtUtils;

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
		try {
			LoginRequest loginRequest = new ObjectMapper().readValue(request.getInputStream(), LoginRequest.class);
			log.info("Username is : {} , password is : {}", loginRequest.getMail(), loginRequest.getPassword());

			UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginRequest.getMail(), loginRequest.getPassword());
			return authenticationManager.authenticate(authenticationToken);
		} catch (Exception e) {
			throw new AuthenticationServiceException(e.getMessage(), e);
		}
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		
		String jwt = jwtUtils.generateJwtToken(authResult);
		
		UserDetailsImpl userPrincipal = (UserDetailsImpl) authResult.getPrincipal();
		List<String> roles = userPrincipal.getAuthorities().stream()
				.map(GrantedAuthority::getAuthority)
				.collect(Collectors.toList());
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		
		StringBuilder profilPictureUrl = new StringBuilder("");
		
		if (StringUtils.hasLength(userPrincipal.getPhotoDeProfil())){
			profilPictureUrl.append("http://localhost:8093/api/file/download/");
			profilPictureUrl.append(userPrincipal.getPhotoDeProfil());
		}
		
		
		new ObjectMapper().writeValue(response.getOutputStream(), new JwtResponse(jwt, 
				userPrincipal.getId(),
				userPrincipal.getFirstName(), 
				userPrincipal.getLastName(),
				userPrincipal.getMail(), 
				userPrincipal.getPhoneNumber(),
				roles,
				userPrincipal.isEnabled(),
				profilPictureUrl.toString()
				));
	}

}
