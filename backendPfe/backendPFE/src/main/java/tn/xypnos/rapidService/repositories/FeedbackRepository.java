package tn.xypnos.rapidService.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import tn.xypnos.rapidService.entities.Annonce;
import tn.xypnos.rapidService.entities.Feedback;
import tn.xypnos.rapidService.enums.Category;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
	

}
