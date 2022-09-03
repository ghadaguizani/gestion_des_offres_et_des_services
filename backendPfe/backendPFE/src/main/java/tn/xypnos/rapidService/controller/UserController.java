package tn.xypnos.rapidService.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.xypnos.rapidService.entities.User;
import tn.xypnos.rapidService.security.UserDetailsImpl;
import tn.xypnos.rapidService.services.UserService;
import tn.xypnos.rapidService.dto.UserDto;
@Data
@NoArgsConstructor
@AllArgsConstructor
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	/*@GetMapping("/users")
	@CrossOrigin(origins = "*")
	public List<User> getAllUser()
	{
		return (List<User>)userService.getAll();
	}*/
	
	
	
	@GetMapping("/users")
	@CrossOrigin(origins = "*")
	public List<UserDto> getAllUser()
	{
		//UserDetailsImpl u= (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		return userService.getAll().stream().map(user -> {
			UserDto userDto = new UserDto();
			userDto.setId(user.getId());
			userDto.setLastName(user.getLastName());
			userDto.setFirstName(user.getFirstName());
			userDto.setMail(user.getMail());
			userDto.setPhoneNumber(user.getPhoneNumber());
			userDto.setServices(user.getServices());
			userDto.setAnnonces(user.getAnnonces());
			userDto.setFeedbacks(user.getFeedbacks());
			userDto.setEnabled(user.isEnabled());
			userDto.setRoles(user.getRoles());
			return userDto;
		}).collect(Collectors.toList());
	}

	// Pour passer plusieurs objets, paramètres, variables, etc on utilise ObjectNode de la bibloithéque jackson
	/*@RequestMapping(value = "/update-password/{id}", method = RequestMethod.POST)
	@ResponseBody
	public boolean  modifPassword(@RequestBody ObjectNode objNode, @PathVariable Long id)
	{
		User u = userService.recherche(id);
		String password = objNode.get("password").asText();
		String Newpassword = objNode.get("Newpassword").asText();
		//if(u.getMdpUser()==password)
		if(u.getPassword().equals(password))
		{
			u.setPassword(Newpassword);
			userService.modifUser(u);

			return true;
		}
		else
		{
			return false;
			//return password+" "+u.getMdpUser().equals(password);
		}	
	}*/
	/*@RequestMapping(value = "/Test", method = RequestMethod.POST)
@ResponseBody
public boolean getTest(@RequestBody Map<String, String> json) {
	 */


}