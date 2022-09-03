package tn.xypnos.rapidService.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.validation.Valid;
import javax.websocket.server.PathParam;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
@RequestMapping("/api/file")
@Data
@Slf4j
public class FileDownloadController {

	@Autowired
	private RegistrationService registrationService;

	@Autowired
	private FilesStorageService storageService;



	@GetMapping("/download/{fileName}")
	public @ResponseBody byte[] download(@PathVariable("fileName") String fileName) throws IOException{

		/*InputStream in = getClass()
				.getResourceAsStream("c:\\uploads\\" + fileName);
		return IOUtils.toByteArray(in);*/
		
		String filePath = "c:\\uploads\\" + fileName;

		  // file to byte[], Path
		return  Files.readAllBytes(Paths.get(filePath));

		  

	}


}
