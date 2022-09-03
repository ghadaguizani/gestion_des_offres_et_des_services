package tn.xypnos.rapidService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.xypnos.rapidService.entities.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long>{

}
