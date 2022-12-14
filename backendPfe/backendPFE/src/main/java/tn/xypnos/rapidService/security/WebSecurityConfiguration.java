package tn.xypnos.rapidService.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import tn.xypnos.rapidService.jwt.JwtUtils;
import tn.xypnos.rapidService.security.filter.AuthEntryPointJwt;
import tn.xypnos.rapidService.security.filter.AuthenticationFilter;
import tn.xypnos.rapidService.security.filter.AuthorizationFilter;



@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
		// securedEnabled = true,
		// jsr250Enabled = true,
		prePostEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter{

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;
	
	@Autowired
	private AuthorizationFilter authorizationFilter;
	
	@Autowired
	private JwtUtils jwtUtils;

	@Bean
	public PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService)
		.passwordEncoder(passwordEncoder());
	}
	


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		AuthenticationFilter authenticationFilter = new AuthenticationFilter(authenticationManagerBean(), jwtUtils);
		authenticationFilter.setFilterProcessesUrl("/api/auth/signin");
		
		http
		.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues()).and()
		.csrf().disable()
		.exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
		.authorizeRequests().anyRequest().permitAll();
		/*.authorizeRequests().antMatchers("/api/auth/**").permitAll().and()
		.authorizeRequests().antMatchers("/api/test/all").permitAll()
		.anyRequest().authenticated();*/

		http
		.addFilterBefore(authorizationFilter, UsernamePasswordAuthenticationFilter.class)
		.addFilter(authenticationFilter);
	}
	
}
