package com.ZachP.WizardEmporiumSpring.controllers;



import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ZachP.WizardEmporiumSpring.models.LoginRequestDTO;
import com.ZachP.WizardEmporiumSpring.models.LoginResponseDTO;
import com.ZachP.WizardEmporiumSpring.models.UserDTO;
import com.ZachP.WizardEmporiumSpring.models.UserResponseDTO;
import com.ZachP.WizardEmporiumSpring.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {
	
	@Autowired
	UserService userService;
	@Autowired
	HttpSession session;
	
	@PostMapping("/register")
	public ResponseEntity<UserResponseDTO> performRegister(@Valid @RequestBody UserDTO userDTO){
		System.out.println("hit /api/register! line 35 Login Controller");
		if (userService.getByEmail(userDTO.getEmail()) != null) {
			return  ResponseEntity.ok(new UserResponseDTO("Email must not be taken!"));
		}
		if(!userDTO.getPassword().equals(userDTO.getConfirmPassword())) {
			return  ResponseEntity.ok(new UserResponseDTO("Password and Confirm password must match"));
		}
		
		userDTO.setPassword(BCrypt.hashpw(userDTO.getPassword(),BCrypt.gensalt()));
		UserDTO newUser = userService.createUser(userDTO);
		session.setAttribute("loggedInUser", newUser.getId());
		return ResponseEntity.ok(new UserResponseDTO("User Successfully Added"));
	}
	@PostMapping("/login")
	public ResponseEntity<LoginResponseDTO> performLogin(@Valid @RequestBody LoginRequestDTO loginRequestDTO){
		UserDTO userFromDb = userService.getByEmail(loginRequestDTO.getEmail());
		if (userFromDb == null) {
			return  ResponseEntity.ok(new LoginResponseDTO("invalid login"));
		}
		if (!BCrypt.checkpw(loginRequestDTO.getPassword(), userFromDb.getPassword())){
			return  ResponseEntity.ok(new LoginResponseDTO("invalid login"));
		}
		session.setAttribute("loggedInUser", userFromDb.getId());
		return ResponseEntity.ok(new LoginResponseDTO("User Logged in"));
	}

}
