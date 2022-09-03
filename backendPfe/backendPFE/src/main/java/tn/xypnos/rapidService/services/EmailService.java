package tn.xypnos.rapidService.services;

import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class EmailService {
	
	private static final String NOREPLY_ADDRESS = "noreply@test.com";
	private final JavaMailSender mailSender;
	
	private final SpringTemplateEngine thymeleafTemplateEngine;
	
	@Async
	public void sendMessageUsingThymeleafTemplate(String to, String subject, Map<String, Object> templateModel, String templateName) {
	                
	    Context thymeleafContext = new Context();
	    thymeleafContext.setVariables(templateModel);
	    String htmlBody = thymeleafTemplateEngine.process(templateName, thymeleafContext);
	    
	    sendHtmlMessage(to, subject, htmlBody);
	}
	
	private void sendHtmlMessage(String to, String subject, String htmlBody) {

		try {
			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, false, "UTF-8");
			helper.setFrom(NOREPLY_ADDRESS);
			helper.setTo(to);
			helper.setSubject(subject);
			helper.setText(htmlBody, true);
			mailSender.send(message);

		} catch (MessagingException e) {
			log.error("failed to send email", e);
			throw new IllegalStateException("failed to send email");
		}
	}
}
