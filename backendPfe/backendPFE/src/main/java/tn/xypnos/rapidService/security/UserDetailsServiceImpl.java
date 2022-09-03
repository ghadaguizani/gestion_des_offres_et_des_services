package tn.xypnos.rapidService.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tn.xypnos.rapidService.entities.User;
import tn.xypnos.rapidService.repositories.UserRepository;



@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {
	
	private final static String USER_NOT_FOUND = "user with email %s not found";

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
		User user =  userRepository.findByMail(mail)
					.orElseThrow(() -> new UsernameNotFoundException(String.format(USER_NOT_FOUND, mail)));
		
		return UserDetailsImpl.build(user);
	}

}
