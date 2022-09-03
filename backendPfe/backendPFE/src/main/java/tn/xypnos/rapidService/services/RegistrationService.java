package tn.xypnos.rapidService.services;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



import lombok.RequiredArgsConstructor;
import tn.xypnos.rapidService.dto.SignupRequest;
import tn.xypnos.rapidService.entities.ConfirmationToken;
import tn.xypnos.rapidService.entities.Role;
import tn.xypnos.rapidService.entities.User;
import tn.xypnos.rapidService.enums.ERole;
import tn.xypnos.rapidService.repositories.RoleRepository;
import tn.xypnos.rapidService.repositories.UserRepository;

@Service
@Transactional
@RequiredArgsConstructor
public class RegistrationService {

	

	private static final String EMAIL_ALREADY_EXISTS = "l email %s existe déjà";

	private static final String ROLE_USER_NOT_FOUND = "ROLE_USER is not found";

	private static final String EMAIL_IS_NOT_VALID = "email %s is not valid";

	private static final String TOKEN_IS_NOT_FOUND = "token %s is not found";

	private static final String TOKEN_IS_ALREADY_CONFIRMED = "token %s is already confirmed";

	private static final String TOKEN_IS_EXPIRED = "token %s is expired";

	private static final String EMAIL_SUBJECT = "Confirmez votre inscription";

	private static final String TEMPLATE = "registration-token";

	private static final String CONFIRM_REGISTRATION_URL = "/api/auth/confirm?token=";

	private final UserRepository userRepository;

	private final RoleRepository roleRepository;

	private final PasswordEncoder encoder;

	private final EmailValidator emailValidator;

	private final EmailService emailService;

	private final ConfirmationTokenService confirmationTokenService;

	@Value( "${api.base.url}" )
	private String apiBaseUrl;

	public void registerUser(SignupRequest signUpRequest) throws MessagingException {



		if (userRepository.existsByMail(signUpRequest.getMail())) {
			throw new IllegalStateException(String.format(EMAIL_ALREADY_EXISTS, signUpRequest.getMail()));
		}

		boolean isEmailValid = emailValidator.test(signUpRequest.getMail());

		if(!isEmailValid) {
			throw new IllegalStateException(String.format(EMAIL_IS_NOT_VALID, signUpRequest.getMail()));
		}

		User user = new User(signUpRequest.getLastName(), 
				signUpRequest.getFirstName(),
				encoder.encode(signUpRequest.getPassword()),
				signUpRequest.getMail(),
				signUpRequest.getPhoneNumber(),
				signUpRequest.getFileName()
				);

		Role userRole = roleRepository.findByName(ERole.ROLE_USER)
				.orElseThrow(() -> new RuntimeException(ROLE_USER_NOT_FOUND));

		Set<Role> roles = Collections.singleton(userRole);
		user.setRoles(roles);

		userRepository.save(user);

		sendRegistrationEmail(user);
	}

	public void confirmToken(String token) {
		ConfirmationToken confirmationToken = confirmationTokenService
				.getToken(token)
				.orElseThrow(() -> new IllegalStateException(String.format(TOKEN_IS_NOT_FOUND, token)));

		if (confirmationToken.getConfirmedAt() != null) {
			throw new IllegalStateException(String.format(TOKEN_IS_ALREADY_CONFIRMED, token));	
		}

		if (confirmationToken.getExpiresAt().isBefore(LocalDateTime.now())) {
			throw new IllegalStateException(String.format(TOKEN_IS_EXPIRED, token));	
		}

		confirmationTokenService.setConfirmedAt(token);

		userRepository.enableAppUser(confirmationToken.getUser().getMail());		
	}

	private void sendRegistrationEmail(User user) {

		String token = UUID.randomUUID().toString();

		ConfirmationToken confirmationToken = new ConfirmationToken(token, LocalDateTime.now(), LocalDateTime.now().plusMinutes(15), user);

		confirmationTokenService.saveConfirmationToken(confirmationToken);

		String link = apiBaseUrl + CONFIRM_REGISTRATION_URL + token;

		Map<String, Object> data = new HashMap<>();
		data.put("username", user.getFirstName());
		data.put("link", link);

		emailService.sendMessageUsingThymeleafTemplate(user.getMail(), EMAIL_SUBJECT, data, TEMPLATE);
	}

}
