package tn.xypnos.rapidService.interfaces;

import java.util.List;

import org.springframework.stereotype.Service;

import tn.xypnos.rapidService.entities.User;
@Service
public interface interfaceUser {
	List<User> getAll();
	User addUser(User user);
	void delete(Long id);
	User recherche(Long id);
	User modifUser(User user);
}
