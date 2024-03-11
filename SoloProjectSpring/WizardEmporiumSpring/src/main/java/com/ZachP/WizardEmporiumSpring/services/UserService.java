package com.ZachP.WizardEmporiumSpring.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ModelAttribute;


import com.ZachP.WizardEmporiumSpring.models.UserDTO;
import com.ZachP.WizardEmporiumSpring.repositories.UserRepository;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;





@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
//	public Boolean registerValid(@Valid @ModelAttribute(value="user") User user, BindingResult result,HttpSession session,Model model) {
//		Boolean isValid = false;
//		if (getByEmail(user.getEmail()) != null) {
//			result.rejectValue("email","email", "Email is taken");
//		}
//		if(!user.getPassword().equals(user.getConfirmPassword())) {
//			result.rejectValue("password","password must match Confirm Password");
//		}
//		//validation checks
//		if(result.hasErrors())
//		{
//			System.out.println(result.getFieldErrors());
//			for (FieldError formFields:result.getFieldErrors()) {
//				System.out.println(formFields.getField());
//				System.out.println(formFields.getDefaultMessage());
//				System.out.println("here"); 
//		}	
//			model.addAttribute("loginUser", new LoginUser());// Make sure you are passing the model that you dont have in @ModelAttribute when there are validation errors
//			//add the loginUser to the error redirect and then re-render the loginpage.jsp
//			
//		}
//		isValid = true;
//		return isValid;
//	}
	public UserDTO createUser(UserDTO user) {
		return userRepo.save(user);
	}
	
	public UserDTO getByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	public UserDTO findById(Long id) {
    	return userRepo.findById(id).orElse(null);
    }
}
