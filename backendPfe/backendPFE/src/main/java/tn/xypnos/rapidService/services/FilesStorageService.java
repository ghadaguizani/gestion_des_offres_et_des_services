package tn.xypnos.rapidService.services;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FilesStorageService {

	//private final Path root = Paths.get("uploads");
	private final Path root = Paths.get("c:\\uploads");
	
	public String save(MultipartFile file) {
		try {
			String generatedFileName = UUID.randomUUID().toString();
			String extension = FilenameUtils.getExtension(file.getOriginalFilename());
			String fileName = generatedFileName + "." + extension;
			Files.copy(file.getInputStream(), this.root.resolve(fileName));
			return fileName;
		} catch (Exception e) {
			throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
		}
	}
	
	
}
