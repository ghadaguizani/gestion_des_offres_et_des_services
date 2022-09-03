package tn.xypnos.rapidService.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.xypnos.rapidService.entities.User;
import tn.xypnos.rapidService.interfaces.interfaceUser;
import tn.xypnos.rapidService.repositories.UserRepository;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Service
public class UserService implements interfaceUser {
@Autowired	
UserRepository userRep;

@Override
public List<User> getAll()
{
	return userRep.findAll();
}

@Override
public User addUser(User user) {
	return userRep.save(user);
}

@Override
public void delete(Long id) {
userRep.deleteById(id);	
}

@Override
public User recherche(Long id) {
	return userRep.findById(id).get();
}

@Override
public User modifUser(User user) {
	return userRep.save(user);
}





}
