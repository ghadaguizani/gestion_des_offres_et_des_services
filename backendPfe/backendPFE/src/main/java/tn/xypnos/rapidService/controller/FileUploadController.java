package tn.xypnos.rapidService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;
import tn.xypnos.rapidService.dto.MessageResponse;
import tn.xypnos.rapidService.services.FilesStorageService;
import tn.xypnos.rapidService.services.RegistrationService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
@Data
public class FileUploadController {
	
	@Autowired
	private FilesStorageService storageService;
	
	@PostMapping("/upload")
	public ResponseEntity<MessageResponse> uploadFile(@RequestParam("file") MultipartFile file){
		try{
			String fileName = storageService.save(file);
			return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(fileName));
		} catch (Exception e) {
			String message = "Could not upload the file: " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
		}
	}
	
	
	
	

}
