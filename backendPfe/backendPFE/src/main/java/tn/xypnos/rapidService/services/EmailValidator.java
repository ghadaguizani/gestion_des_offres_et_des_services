package tn.xypnos.rapidService.services;

import java.util.function.Predicate;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class EmailValidator implements Predicate<String>{

	@Override
	public boolean test(String email) {
		boolean result = true;
		try {
			InternetAddress emailAddr = new InternetAddress(email);
			emailAddr.validate();
		} catch (AddressException ex) {
			log.error("invalid email", ex);
			result = false;
		}
		return result;
	}

}
