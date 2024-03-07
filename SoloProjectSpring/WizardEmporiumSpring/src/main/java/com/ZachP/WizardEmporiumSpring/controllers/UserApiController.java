package com.ZachP.WizardEmporiumSpring.controllers;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ZachP.WizardEmporiumSpring.models.LoginUser;
import com.ZachP.WizardEmporiumSpring.models.User;
import com.ZachP.WizardEmporiumSpring.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins ="http://localhost:5173")
@RequestMapping("/api/auth")
public class UserApiController {
	
	@Autowired
	UserService userService;
	@Autowired
	HttpSession session;
	
	@PostMapping("/registration")
	public String regisProcess(@Valid @ModelAttribute(value="user") User user, BindingResult result,HttpSession session,Model model) {
		//email checks
		System.out.print("regisProcess HERE");
		if (userService.getByEmail(user.getEmail()) != null) {
			result.rejectValue("email","email", "Email is taken");
		}
		if(!user.getPassword().equals(user.getConfirmPassword())) {
			result.rejectValue("password","password must match Confirm Password");
		}
		//validation checks
		if(result.hasErrors())
		{
			model.addAttribute("loginUser", new LoginUser()); // Make sure you are passing the model that you dont have in @ModelAttribute when there are validation errors
			//add the loginUser to the error redirect and then re-render the loginpage.jsp
			return "LoginPage.jsp";	
		}
		user.setPassword(BCrypt.hashpw(user.getPassword(),BCrypt.gensalt()));
		User newUser = userService.createUser(user);
		session.setAttribute("loggedInUser", newUser.getId());
		return "redirect:/auth/login";
		}
//	@PostMapping("/login")
//	public String loginProcess(@Valid @ModelAttribute(value="loginUser") LoginUser loginUser, BindingResult result,HttpSession session, Model model) {
//		
//		if(result.hasErrors()) {
//			model.addAttribute("user", new User());
//			return "/LoginPage.jsp";
//		}
//		User userFromDb = userService.getByEmail(loginUser.getEmail());
//		if (userFromDb == null) {
//			model.addAttribute("user", new User());
//			result.rejectValue("email","invalid","invalid login");
//			return "/LoginPage.jsp";
//		}
//		if (!BCrypt.checkpw(loginUser.getPassword(), userFromDb.getPassword())){
//			result.rejectValue("email","invalid","invalid login");
//			return "/LoginPage.jsp";
//		}
//		session.setAttribute("loggedInUser", userFromDb.getId());
//		return "redirect:/";
//	}
//	@GetMapping("/logout")
//	public String logout(HttpSession session) {
//		session.invalidate();
//		return "redirect:/auth/login";
//	}
	
}
