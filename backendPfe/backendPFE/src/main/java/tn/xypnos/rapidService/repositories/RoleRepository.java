package tn.xypnos.rapidService.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.xypnos.rapidService.entities.Role;
import tn.xypnos.rapidService.enums.ERole;



public interface RoleRepository extends JpaRepository<Role, Long>{

	Optional<Role> findByName(ERole name);
}
