package tn.xypnos.rapidService.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import tn.xypnos.rapidService.entities.Annonce;
import tn.xypnos.rapidService.entities.Serviceee;
import tn.xypnos.rapidService.enums.Category;
import tn.xypnos.rapidService.enums.SubCategory;

@Repository
public interface AnnonceRepository extends JpaRepository<Annonce, Long> {


@Query("select a from Annonce a where a.category=:c and a.enabled = 1")
List<Annonce> findByCategory(@Param("c") Category category);



@Query(value="select * from Annonce a inner join user u on u.id = a.user_id where  (((lower(a.category) like %:keyword%) or (lower(a.location) like %:keyword%) or (lower(a.description) like %:keyword%) or (lower(a.sub_category) like %:keyword%) or (lower(u.first_name) like %:keyword%) or (lower(u.last_name) like %:keyword%)) and a.enabled = 1 )",nativeQuery=true)
List<Annonce> findByKeyword(@Param("keyword") String keyword);

@Query("select a from Annonce a where a.user.id=:id")
List<Annonce> findByUser(@Param("id") Long id);

@Query("select a from Annonce a  where a.enabled = 1")
List<Annonce> findAllEnabled();

@Query("select a from Annonce a where a.enabled = 0")
List<Annonce> findAllDisabled();
}
