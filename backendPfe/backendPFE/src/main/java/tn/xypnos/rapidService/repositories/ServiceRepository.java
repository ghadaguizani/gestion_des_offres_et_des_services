package tn.xypnos.rapidService.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import tn.xypnos.rapidService.dto.ServiceDto;
import tn.xypnos.rapidService.entities.Annonce;
import tn.xypnos.rapidService.entities.Serviceee;
import tn.xypnos.rapidService.enums.Category;
import tn.xypnos.rapidService.enums.SubCategory;
@Repository
public interface ServiceRepository extends JpaRepository<Serviceee,Long> {
	
@Query("select s from Serviceee s where s.category=:c and s.enabled = 1")
List<Serviceee> findByCategory(@Param("c") Category category);


@Query("select s from Serviceee s where s.subCategory=:subcategory and s.enabled = 1")
List <Serviceee> findBySubCategory(@Param("subcategory") SubCategory subCategory);

@Query(value="select * from Serviceee s inner join user u on u.id = s.user_id where  (((lower(s.category) like %:keyword%) or (lower(s.location) like %:keyword%) or (lower(s.description) like %:keyword%) or (lower(s.sub_category) like %:keyword%) or (lower(u.first_name) like %:keyword%) or (lower(u.last_name) like %:keyword%)) and s.enabled = 1 )",nativeQuery=true)
List<Serviceee> findByKeyword(@Param("keyword") String keyword);


@Query("select s from Serviceee s where s.user.id=:id")
List<Serviceee> findByUser(@Param("id") Long id);

@Query("select s from Serviceee s where s.enabled = 1")
List<Serviceee> findAllEnabled();

@Query("select s from Serviceee s where s.enabled = 0")
List<Serviceee> findAllDisabled();

@Query(value = "SELECT s.category , COUNT(s.id) FROM Serviceee AS s GROUP BY s.category")
List<Object[]> countByCategory();



}
