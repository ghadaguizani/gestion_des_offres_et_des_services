package tn.xypnos.rapidService.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import tn.xypnos.rapidService.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByMail(String mail);
	
	
	Boolean existsByMail(String mail);
	
    @Modifying
    @Query("UPDATE User u " +
            "SET u.enabled = TRUE WHERE u.mail = ?1")
    int enableAppUser(String email);
    
    
}
