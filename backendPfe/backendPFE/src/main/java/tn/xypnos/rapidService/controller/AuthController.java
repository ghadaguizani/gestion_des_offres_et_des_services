package tn.xypnos.rapidService.controller;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import tn.xypnos.rapidService.dto.MessageResponse;
import tn.xypnos.rapidService.dto.SignupRequest;
import tn.xypnos.rapidService.services.FilesStorageService;
import tn.xypnos.rapidService.services.RegistrationService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
@Data
@Slf4j
public class AuthController {

	@Autowired
	private RegistrationService registrationService;

	@Autowired
	private FilesStorageService storageService;

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {

		try {
			registrationService.registerUser(signUpRequest);
			return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
		} catch(Exception e) {
			log.error("An error has occured", e);
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse(e.getMessage()));
		}
	}





	@GetMapping("/confirm")
	public ResponseEntity<?> confirm(@RequestParam("token") String token){
		try {
			registrationService.confirmToken(token);
			return ResponseEntity.status(HttpStatus.FOUND).location(URI.create("http://localhost:4200/login")).build();
		} catch(Exception e) {
			log.error("An error has occured", e);
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse(e.getMessage()));
		}
	}

	@PostMapping("/upload")
	public ResponseEntity<MessageResponse> uploadFile(@RequestParam("file") MultipartFile file) {
		try {
			String fileName = storageService.save(file);
			return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(fileName));
		} catch (Exception e) {
			String message = "Could not upload the file: " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
		}
	}
}
